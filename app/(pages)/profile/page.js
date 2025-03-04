"use client";

import { supabase } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import Image from "next/image";
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
      const { data: auth } = await supabase.auth.getUser();
      if (!auth) redirect('/login');
      const { data: user } = await supabase.from("profiles").select("*").eq("id", auth.user.id).limit(1).single();
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
          <p className="box mx-auto w-min font-black text-transparent animate-pulse px-4 rounded-lg">username</p>
          <p className="box text-transparent mx-auto min-w-1/2 w-min mt-2 animate-pulse px-4 rounded-lg">bio</p>
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
      <div className="relative w-28 aspect-square mx-auto rounded-lg">
        <div className="box rounded-lg w-full h-full absolute top-0 left-0 animate-pulse"></div>
        <Image className="w-full relative h-full object-cover rounded-lg" src={user.avatar_url} alt={user.username} width={0} height={0} sizes="50vw" priority/>
      </div>
      <div className="text-center">
        <p className="uppercase">{user.username}</p>
        <p className="mt-2">{user.bio}</p>
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
        <button className="box btn p-4 rounded-lg text-nowrap flex-1">แก้ไขโปรไฟล์</button>
        <button className="box btn p-4 rounded-lg text-nowrap flex-1">แชร์โปรไฟล์</button>
        <button className="box btn p-4 rounded-lg text-nowrap"><LogOut onClick={signOut}/></button>
      </div>
    </div>
  );
};