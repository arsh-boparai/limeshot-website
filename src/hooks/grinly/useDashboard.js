import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export function useDashboardClinic(userId) {
  return useQuery({
    queryKey: ['dashboardClinic', userId],
    queryFn: async () => {
      if (!supabase) throw new Error('Supabase not configured');
      const { data, error } = await supabase
        .from('grinly_clinics')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
}

export function useDashboardBookings(clinicId) {
  return useQuery({
    queryKey: ['dashboardBookings', clinicId],
    queryFn: async () => {
      if (!supabase) throw new Error('Supabase not configured');
      const { data, error } = await supabase
        .from('grinly_bookings')
        .select(`
          *,
          grinly_patients (first_name, last_name, email, phone),
          grinly_time_slots (starts_at, duration_minutes)
        `)
        .eq('clinic_id', clinicId)
        .in('status', ['pending', 'confirmed'])
        .order('time_slots(starts_at)', { ascending: true });

      if (error) throw error;
      return data ?? [];
    },
    enabled: !!clinicId,
    refetchInterval: 30_000,
  });
}

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ bookingId, status }) => {
      if (!supabase) throw new Error('Supabase not configured');
      const { data, error } = await supabase
        .from('grinly_bookings')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', bookingId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dashboardBookings'] });
    },
  });
}
