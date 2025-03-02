export default function Page() {
  return (
    <div className="grid gap-4">
      <div className="box btn aspect-square rounded-lg">
        <label className="w-full h-full flex justify-center items-center">
          <p className="opacity-50">คลิกเพื่อใส่งาน</p>
          <input className="hidden" type="file" accept="image/*"/>
        </label>
      </div>
      <div className="box btn rounded-lg">
        <input className="p-4" type="text" placeholder="ชื่อของงานนี้"/>
      </div>
      <div className="box btn rounded-lg">
        <textarea className="p-4 resize-none" type="text" placeholder="คำอธิบายของงานนี้" rows={5}/>
      </div>
      <button className="box this btn p-4 rounded-lg">ส่ง</button>
    </div>
  );
};