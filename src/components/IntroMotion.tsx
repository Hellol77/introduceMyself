"use client";
import React from "react";
import { motion } from "framer-motion";

const circleAnimation = {
  open: {
    clipPath: "circle(2000px at center center)",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

export default function IntroMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={"open"}
      className="absolute w-screen  h-screen bg-gray-500 z-40"
      variants={circleAnimation}
    >
      {children}
    </motion.div>
  );
}
