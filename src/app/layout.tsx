"use client";

import MobileBan from "@/components/MobileBan";
import "../styles/globals.css";
import IntroMotion from "@/components/IntroMotion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#ffffff] text-[#030303]">
        <MobileBan />
        <IntroMotion>
          <section className="mx-auto flex-shrink float-none inset-0 relative w-[1200px]">
            {children}
          </section>
        </IntroMotion>
      </body>
    </html>
  );
}
