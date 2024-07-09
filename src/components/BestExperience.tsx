"use client";
import EaseInOut from "@/components/ui/EaseInOut";
import TextContainer from "@/components/ui/TextContainer";
import React from "react";

export default function BestExperience() {
  return (
    <TextContainer className=" justify-center items-center flex-col gap-8">
      <EaseInOut>지금까지 가장 좋았던 경험은?</EaseInOut>
      <EaseInOut>유럽 배낭 여행!</EaseInOut>
    </TextContainer>
  );
}
