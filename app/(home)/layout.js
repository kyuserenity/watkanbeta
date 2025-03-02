import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import Banner from "./components/banner";

export const metadata = {title: "หน้าหลัก"};

export default function Layout({ children }) {
  return (
    <>
      <Header><p className="text-4xl font-black">HOME</p></Header>
      <hr/>
      <main className="max-w-lg mx-auto p-4 grid gap-4 mb-40">
        <Banner/>
        <hr/>
        {children}
      </main>
      <Navbar page={1}/>
    </>
  );
};