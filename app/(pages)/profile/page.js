import { Gift, Heart, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="grid gap-4">
      <div className="box w-28 aspect-square mx-auto rounded-lg"></div>
      <p className="uppercase text-center">username</p>
      <div className="box p-4 rounded-lg">
        <p>แฟรนไชส์อัลบั้ม สงบสุขแชมป์ฟอยล์เอนทรานซ์โหงว แฟ้บคาแร็คเตอร์ตื้บมอบตัว โมเต็ลแหม็บมาร์ชซิ่ง ศิลปากรมินต์สมาพันธ์ทอม</p>
      </div>
      <div className="flex gap-4">
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg"><Users/><p>0</p></button>
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg"><Heart/><p>0</p></button>
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg"><Gift/><p>0</p></button>
      </div>
      <div className="flex gap-4">
        <button className="box btn p-4 rounded-lg flex-1">ติดตาม</button>
        <button className="box btn p-4 rounded-lg flex-1">แชร์โปรไฟล์</button>
      </div>
    </div>
  );
};