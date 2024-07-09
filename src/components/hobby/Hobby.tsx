"use client";

import EaseInOutText from "@/components/ui/EaseInOut";
import TextContainer from "@/components/ui/TextContainer";
import React from "react";

export default function Hobby() {
  return (
    <TextContainer className="flex-col items-center justify-center h-screen gap-24">
      <EaseInOutText>취미는?</EaseInOutText>
      <EaseInOutText>
        취준 이후로 못하고 있지만 복싱, 드럼이었어요.
      </EaseInOutText>
      <EaseInOutText>
        요즘은 소소한 용돈벌이로 하는 주식이 취미에요.
      </EaseInOutText>
    </TextContainer>
  );
}
