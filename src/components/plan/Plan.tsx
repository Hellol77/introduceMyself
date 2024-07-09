"use client";
import EaseInOutText from "@/components/ui/EaseInOut";
import TextContainer from "@/components/ui/TextContainer";
import React from "react";

export default function Plan() {
  return (
    <TextContainer className="flex-col items-center justify-center h-screen gap-24">
      <EaseInOutText>앞으로의 계획은?</EaseInOutText>
      <EaseInOutText>
        추후에 있을 팀 프로젝트에서 아주 근사한 프로젝트를 하고 싶어요.
      </EaseInOutText>
    </TextContainer>
  );
}
