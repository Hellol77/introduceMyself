"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import EaseInOut from "@/components/ui/EaseInOut";
export default function MBTI() {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="flex justify-start w-full h-40 ml-48">
      <EaseInOut>
        MBTI는{" "}
        {inView && (
          <TypeAnimation
            sequence={["ISFP"]}
            speed={1}
            style={{ whiteSpace: "pre-line" }}
          />
        )}
      </EaseInOut>
    </div>
  );
}
