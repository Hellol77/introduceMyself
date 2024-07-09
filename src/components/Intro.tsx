"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Character from "../../public/character.png";

export default function Intro() {
  return (
    <div className="flex items-center gap-8 ">
      <Image src={Character} width={150} height={150} alt="Character" />
      <span className=" text-4xl font-semibold">
        안녕하세요! 제 이름은 원동현입니다.
      </span>
    </div>
  );
}
