import Header from "@/app/components/header";
import Navbar from "@/app/components/navbar";
import Artwork from "./components/artwork";

export const metadata = {title: "โปรไฟล์"};

export default function Layout({ children }) {
  return (
    <>
      <Header><p className="text-4xl font-black">SEARCH</p></Header>
      <hr/>
      <main className="max-w-lg mx-auto p-4 grid gap-4 mb-40">
        {children}
        <hr/>
        <div className="grid grid-cols-2 gap-4">
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
        </div>
      </main>
      <Navbar page={5}/>
    </>
  );
};