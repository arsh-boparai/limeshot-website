import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export function useCreateBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ clinicId, slotId, firstName, lastName, email, phone, notes }) => {
      // Upsert patient by email
      const { data: patient, error: patientError } = await supabase
        .from('grinly_patients')
        .upsert({ email, first_name: firstName, last_name: lastName, phone }, { onConflict: 'email' })
        .select('id')
        .single();

      if (patientError) throw patientError;

      const { data: booking, error: bookingError } = await supabase
        .from('grinly_bookings')
        .insert({
          clinic_id: clinicId,
          patient_id: patient.id,
          slot_id: slotId,
          notes,
          status: 'pending',
        })
        .select('*')
        .single();

      if (bookingError) throw bookingError;

      // Mark slot as taken
      await supabase
        .from('grinly_time_slots')
        .update({ is_available: false })
        .eq('id', slotId);

      return booking;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['timeSlots', variables.clinicId] });
    },
  });
}
