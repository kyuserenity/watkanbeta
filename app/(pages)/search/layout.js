import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import { Search } from "lucide-react";

export const metadata = {title: "ค้นหา"};

export default function Layout({ children }) {
  return (
    <>
      <Header><p className="text-4xl font-black">PROFILE</p></Header>
      <hr/>
      <main className="max-w-lg mx-auto p-4 grid gap-4 mb-40">
        <div className="p-4 box btn flex gap-2 justify-center items-center rounded-lg"><Search className="w-4 h-4"/><p>ค้นหา</p></div>
        {children}
      </main>
      <Navbar page={2}/>
    </>
  );
};