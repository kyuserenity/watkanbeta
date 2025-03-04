"use client";

import { supabase } from "@/utils/supabase/client";
import { CheckSquare2 } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  async function signInWithDiscord() {
    const { data: { url } } = await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: window.location.origin+"/login/callback",
        skipBrowserRedirect: true,
      }
    });
    alert(url);
  };
  return (
    <div>
      <Image className="aspect-video w-full rounded-lg" src={"/banner.jpg"} width={0} height={0} sizes="100vw" alt="" priority/>
      <p className="text-4xl font-black mt-6">ล็อกอินแล้วได้อะไร?</p>
      <div className="grid gap-2 mt-6">
        <div className="flex gap-2">
          <CheckSquare2/>
          <p>สามารถ<b className="text-emerald-500">ลงงานศิลปะ</b>ได้</p>
        </div>
        <div className="flex gap-2">
          <CheckSquare2/>
          <p>สามารถ<b className="text-fuchsia-500">กดไลค์</b>และ<b className="text-sky-500">ติดตาม</b>ศิลปินที่คุณชื่นชอบได้</p>
        </div>
        <div className="flex gap-2">
          <CheckSquare2/>
          <p>สามารถใช้<b className="text-amber-500">ระบบเหรียญ</b>ได้</p>
        </div>
      </div>
      <div className="grid gap-2 mt-6">
        <button className="box this btn p-4 rounded-lg flex gap-4 items-center justify-center" onClick={signInWithDiscord}>
          <Image className="aspect-square w-7 h-5" width={0} height={0} sizes="10vw" src={"/discordicon.jpg"} alt="" priority/>
          <p className="text-xl font-black">Join with Discord</p>
        </button>
      </div>
      <div className="grid gap-2 mt-2">
        <p className="text-xs opacity-50">*หากคุณเข้าสู่ระบบหมายความว่าคุณได้ยอมรับ<Link href={""} className="underline">เงื่อนไขการให้บริการ</Link>และ<Link href={""} className="underline">นโยบายความเป็นส่วนตัว</Link>ของเรา</p>
        <p className="text-xs opacity-50">**แนะนำให้ใช้ Browser ให้การใช้งานเว็บไซต์ หากเข้าลิงค์จาก Social Media อาจเกิดปัญหาในการล็อกอิน.</p>
      </div>
    </div>
  );
};