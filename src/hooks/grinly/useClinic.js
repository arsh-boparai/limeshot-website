import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';

export function useClinic(slug) {
  return useQuery({
    queryKey: ['clinic', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('grinly_clinics')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
}
