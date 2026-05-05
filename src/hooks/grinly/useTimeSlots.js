import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export function useTimeSlots(clinicId) {
  return useQuery({
    queryKey: ['timeSlots', clinicId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('grinly_time_slots')
        .select('*')
        .eq('clinic_id', clinicId)
        .eq('is_available', true)
        .gte('starts_at', new Date().toISOString())
        .order('starts_at')
        .limit(30);

      if (error) throw error;
      return data ?? [];
    },
    enabled: !!clinicId,
  });
}
