'use client';

import { useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { redirect } from 'next/navigation';

export default function AuthCallback() {

  useEffect(() => {
    const handleSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase.from("profiles").select("id").eq("id", user.id).limit(1).single();
        if (profile) {
          redirect('/profile');
        } else {
          await supabase.from("profiles").insert([
            {
              id: user.id,
              username: user.user_metadata.full_name,
              avatar_url: user.user_metadata.avatar_url,
              bio: "ยินดีต้อนรับ"
            }
          ]);
          redirect('/profile');
        };
      } else {
        redirect('/login');
      };
    };
    handleSession();
  }, []);

  return <div></div>;
}