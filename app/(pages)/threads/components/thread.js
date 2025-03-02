import { Gift, Heart } from "lucide-react";

export default function Thread() {
  return (
    <div className="grid gap-4">

      <div className="box btn aspect-video rounded-lg"></div>

      <div>
        <p className="text-2xl font-black">ชื่อเธรดนี้</p>
        <p className="text-xs">00:00 2/3/2568</p>
        <div className="box p-4 rounded-lg mt-2">
          <p className="line-clamp-3 text-sm">สติ๊กเกอร์ แหวว ฟลุกรามาธิบดีฮันนีมูนไดเอ็ต จิ๊กโก๋ดีมานด์ พิซซ่าทำงานมอยส์เจอไรเซอร์ วานิลา นพมาศซัพพลายอ่วมแต๋วนอร์ท เรตติ้งเบิร์ด สามแยกซาบะโทรโข่งต่อรองสติ๊กเกอร์ รามาธิบดีแคทวอล์คอุปนายกกับดักมาราธอน สต็อกอินเตอร์โพลล์ออร์แกน วินเฮอร์ริเคนละอ่อนซาตาน อิออน ออร์แกนิคหม่านโถวไอซ์กาญจนาภิเษกรุมบ้า เพนตากอนซิงตังค์โลโก้ไฮไลท์ แจ๊ส</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg"><Heart/><p>0</p></button>
        <button className="box btn flex flex-col gap-2 justify-center items-center p-4 flex-1 rounded-lg"><Gift/><p>0</p></button>
      </div>
      
      <button className="box this btn p-4 rounded-lg">เพิ่มของคุณ</button>

    </div>
  );
};