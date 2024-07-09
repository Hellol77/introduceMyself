"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import EaseInOut from "@/components/ui/EaseInOut";
export default function MBTI() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div className="flex justify-start w-full h-fit ml-48">
      <EaseInOut duration={1.5}>MBTI는 ISFP 입니다.</EaseInOut>
    </div>
  );
}
