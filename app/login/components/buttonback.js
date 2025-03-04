"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  function back() {
    router.back();
  };
  return (
    <button className="flex items-center"><ArrowLeft className="w-10 h-10" onClick={back}/></button>
  );
};