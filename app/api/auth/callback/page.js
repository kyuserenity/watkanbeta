'use client';

import { useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';

export default function AuthCallback() {

  useEffect(() => {
    const handleSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        redirect('/profile');
      } else {
        redirect('/login');
      }
    };
    handleSession();
  }, []);

  return <div></div>;
}