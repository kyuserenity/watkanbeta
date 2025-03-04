"use client";

import { supabase } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signOut() {
    await supabase.auth.signOut();
    redirect('/');
  };

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) redirect('/login');
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4">
        <div className="box w-28 aspect-square mx-auto rounded-lg animate-pulse"></div>
        <div className="text-center">  
          <p className="uppercase mx-auto w-min font-black text-transparent bg-zinc-200 dark:bg-zinc-800 animate-pulse px-4 rounded-lg">username</p>
          <p className="text-transparent mx-auto min-w-1/2 w-min mt-2 bg-zinc-200 dark:bg-zinc-800 animate-pulse px-4 rounded-lg">bio</p>
        </div>
        <div className="flex gap-4">
          <button className="box btn text-transparent animate-pulse flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
            <p>0</p>
            <p>ผู้ติดตาม</p>
          </button>
          <button className="box btn text-transparent animate-pulse flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
            <p>0</p>
            <p>ถูกใจ</p>
          </button>
          <button className="box btn text-transparent animate-pulse flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
            <p>0</p>
            <p>ของขวัญ</p>
          </button>
        </div>
        <div className="flex gap-4">
          <button className="box btn p-4 rounded-lg text-transparent animate-pulse flex-1">แก้ไข</button>
          <button className="box btn p-4 rounded-lg text-transparent animate-pulse flex-1">แชร์โปรไฟล์</button>
          <button className="box btn p-4 rounded-lg text-transparent animate-pulse"><LogOut/></button>
        </div>
      </div>
    );
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="grid gap-4">
      <div className="box w-28 aspect-square mx-auto rounded-lg animate-pulse"></div>
      <div className="text-center">
        <p className="uppercase">{user.id}</p>
        <p className="mt-2">ยินดีต้อนรับ</p>
      </div>
      <div className="flex gap-4">
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
          <p>0</p>
          <p>ผู้ติดตาม</p>
        </button>
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
          <p>0</p>
          <p>ถูกใจ</p>
        </button>
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg">
          <p>0</p>
          <p>ของขวัญ</p>
        </button>
      </div>
      <div className="flex gap-4">
        <button className="box btn p-4 rounded-lg text-nowrap flex-1">แก้ไข</button>
        <button className="box btn p-4 rounded-lg text-nowrap flex-1">แชร์โปรไฟล์</button>
        <button className="box btn p-4 rounded-lg text-nowrap"><LogOut onClick={signOut}/></button>
      </div>
    </div>
  );
};