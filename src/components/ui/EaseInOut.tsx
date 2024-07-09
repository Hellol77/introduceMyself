import { motion } from "framer-motion";
import React from "react";

export default function EaseInOutText({
  children,
  duration = 2,
  durationY = 1,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  durationY?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`text-2xl  font-semibold ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: -20 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration,
        y: { duration: durationY },
      }}
    >
      {children}
    </motion.span>
  );
}
