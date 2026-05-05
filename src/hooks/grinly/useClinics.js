import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export function useClinics(search = '') {
  return useQuery({
    queryKey: ['clinics', search],
    queryFn: async () => {
      let query = supabase
        .from('grinly_clinics')
        .select('id, slug, name, address, city, phone, description, specialties, image_url, plan_track')
        .eq('is_active', true)
        .order('name');

      if (search) {
        query = query.ilike('name', `%${search}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data ?? [];
    },
  });
}
