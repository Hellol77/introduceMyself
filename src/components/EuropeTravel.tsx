"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import photo1 from "../../public/1.jpeg";
import photo2 from "../../public/2.jpeg";
import photo3 from "../../public/3.jpeg";
import photo4 from "../../public/4.jpeg";
import photo5 from "../../public/5.jpeg";
import EaseInOut from "@/components/ui/EaseInOut";

const PHOTOS = [
  { photo: photo1, className: "absolute -top-24 left-0" },
  { photo: photo2, className: "absolute top-56 right-0" },
  { photo: photo3, className: "absolute top-[600px] left-32" },
  { photo: photo5, className: "absolute top-[1000px] right-56" },
  { photo: photo4, className: "absolute top-[1400px] left-56" },
];

const Photo = ({
  image,
  className,
}: {
  image: StaticImageData;
  className?: string;
}) => {
  return (
    <EaseInOut duration={0.5} durationY={1} className={className}>
      <Image src={image} alt="image" width={400} height={600} />
    </EaseInOut>
  );
};

export default function EuropeTravel() {
  return (
    <div className="relative h-[1800px] w-full">
      {PHOTOS.map((photo, index) => (
        <Photo key={index} image={photo.photo} className={photo.className} />
      ))}
    </div>
  );
}
