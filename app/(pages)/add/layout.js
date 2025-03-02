import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";

export const metadata = {title: "เพิ่มงาน"};

export default function Layout({ children }) {
  return (
    <>
      <Header><p className="text-4xl font-black">ADD</p></Header>
      <hr/>
      <main className="max-w-lg mx-auto p-4 grid gap-4 mb-40">
        {children}
      </main>
      <Navbar page={3}/>
    </>
  );
};