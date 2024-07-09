import { motion } from "framer-motion";
import React from "react";

export default function EaseInOutText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.span
      className="text-2xl font-semibold"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: -20 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.span>
  );
}
