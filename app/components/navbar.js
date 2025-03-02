import { Book, Home, Plus, Search, User } from "lucide-react";
import Link from "next/link";

export default function Navbar({ page }) {
  return (
    <nav className="fixed z-20 bottom-0 w-full pt-10 pb-2 px-4 flex justify-center bg-gradient-to-t to-transparent from-zinc-50 dark:from-zinc-950">
      <div className="box p-2 flex gap-2 rounded-full">
        <Link className={`${page === 1 && "this"} box btn p-2 rounded-full`} href={"/"}><Home/></Link>
        <Link className={`${page === 2 && "this"} box btn p-2 rounded-full`} href={"/search"}><Search/></Link>
        <Link className={`${page === 3 && "this"} box btn p-2 rounded-full`} href={"/add"}><Plus/></Link>
        <Link className={`${page === 4 && "this"} box btn p-2 rounded-full`} href={"/threads"}><Book/></Link>
        <Link className={`${page === 5 && "this"} box btn p-2 rounded-full`} href={"/profile"}><User/></Link>
      </div>
    </nav>
  );
};