import Image from "next/image";
import React from "react";
import Character from "../../public/character.png";

export default function MobileBan() {
  return (
    <div className="flex-col text-xl font-semibold absolute z-50 bg-white w-screen h-screen md:hidden items-center flex pt-52 gap-10">
      <Image
        src={Character}
        alt="character"
        width={150}
        height={150}
        className="w-32 h-32 "
      />
      모바일을 지원하지 않아요. 미안해요..!
    </div>
  );
}
