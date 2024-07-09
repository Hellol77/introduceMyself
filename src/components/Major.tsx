"use client";

import EaseInOut from "@/components/ui/EaseInOut";
import React from "react";

export default function Major() {
  return (
    <div className="flex w-full h-40 justify-end">
      <EaseInOut duration={1.5}>
        전공은 수학과 컴퓨터공학을 복수 전공했어요.
      </EaseInOut>
    </div>
  );
}
