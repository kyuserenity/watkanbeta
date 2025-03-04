import Header from "@/app/components/header";
import BackButton from "./components/buttonback";

export const metadata = {title: "เข้าสู่ระบบ"};

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <div className="w-full">
          <BackButton/>
        </div>
      </Header>
      <hr/>
      <main className="max-w-lg mx-auto p-4 grid gap-4 mb-40">
        {children}
      </main>
    </>
  );
};