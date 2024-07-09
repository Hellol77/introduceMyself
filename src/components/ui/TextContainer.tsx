import React from "react";

export default function TextContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`flex w-full  ${className}`}>{children}</section>;
}
