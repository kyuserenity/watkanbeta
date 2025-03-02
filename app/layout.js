import { Prompt } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Watkan - พื้นที่แสดงผลงานศิลปินออนไลน์ ค้นพบแรงบันดาลใจและสนับสนุนนักวาดได้ที่นี่",
  description: "เว็บรวมนักวาดไทย! อัปโหลดผลงานศิลปะดิจิทัล/แบบดั้งเดิม แชร์เทคนิคการวาดรูป พบชุมชนคนรักศิลปะ พร้อมระบบสนับสนุนนักวาดผ่านการส่งของขวัญ",
  keywords: "วาดรูป, นักวาด, ศิลปะ, แรงบันดาลใจ, ภาพวาด, รูปวาด, ชุมชนศิลปินไทย, สนับสนุนนักวาด, พอร์ตโฟลิโอศิลปะ",
  openGraph: {
    title: "Watkan - พื้นที่แสดงผลงานศิลปินออนไลน์ ค้นพบแรงบันดาลใจและสนับสนุนนักวาดได้ที่นี่",
    description: "แพลตฟอร์มสำหรับนักวาด อัปโหลด แชร์ และรับการสนับสนุนจากแฟน ๆ",
    url: "https://watkanbeta.versel.app",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 1600,
        height: 900,
        alt: "ภาพวาดลายเส้นสไตล์เด็ก ๆ แสดงบ้านสีแดงหลังคาสีดำตั้งอยู่บนพื้นสีน้ำตาล มีต้นไม้สีเขียวรอบ ๆ ท้องฟ้าเป็นสีฟ้าพร้อมเส้นแสดงแสงแดดจากดวงอาทิตย์สีส้ม"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@watkan",
    title: "Watkan - พื้นที่แสดงผลงานศิลปินออนไลน์ ค้นพบแรงบันดาลใจและสนับสนุนนักวาดได้ที่นี่",
    description: "เว็บรวมนักวาดไทย! อัปโหลดผลงานศิลปะดิจิทัล/แบบดั้งเดิม แชร์เทคนิคการวาดรูป พบชุมชนคนรักศิลปะ พร้อมระบบสนับสนุนนักวาดผ่านการส่งของขวัญ",
    images: ["/banner.jpg"]
  }
};

const geistSans = Prompt({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${geistSans} antialiased bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50`}>
        {children}
      </body>
    </html>
  );
};