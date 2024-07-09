"use client";

import Image from "next/image";
import React from "react";
import Character from "../../public/character.png";
import { motion } from "framer-motion";

const circleAnimation = {
  open: {
    transform: "scale(0)",
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 20,
      bounce: 0,
    },
  },
};

export default function Intro() {
  return (
    <div className="flex  justify-center items-center h-screen gap-8">
      <div className="relative ">
        <motion.div
          className="w-40 h-40 hidden md:block absolute  rounded-full z-10 -right-4 -top-4 bg-[#212529] scale-[100]"
          animate="open"
          variants={circleAnimation}
        ></motion.div>
        <Image
          src={Character}
          width={150}
          height={150}
          alt="Character"
          className="relative z-50 hidden md:block"
        />
      </div>
      <span className="w-full flex justify-start  text-3xl font-semibold">
        안녕하세요! 제 이름은 프론트엔드 개발자를 꿈꾸는 원동현입니다.
      </span>
    </div>
  );
}
