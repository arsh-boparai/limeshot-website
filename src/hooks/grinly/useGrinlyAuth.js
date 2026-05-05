import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export function useGrinlyAuth() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = (email, password) =>
    supabase?.auth.signInWithPassword({ email, password });

  const signOut = () => supabase?.auth.signOut();

  return { session, loading, signIn, signOut };
}
