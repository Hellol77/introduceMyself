import MobileBan from "@/components/MobileBan";
import "../styles/globals.css";
import dynamic from "next/dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#ffffff] text-[#030303] relative">
        <MobileBan />
        {/* <IntroMotion /> */}
        <section className="mx-auto flex-shrink float-none inset-0 relative w-[1200px] h-[3600px]">
          <div className="relative flex flex-col items-center  w-full h-screen">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
