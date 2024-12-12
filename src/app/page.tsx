"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the active image index
      const index = Math.floor(scrollPosition / windowHeight);
      setActiveIndex(Math.min(index, images.length - 1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="relative h-[100vh] w-screen">
        {/* Background fixed images */}
        <div className="fixed top-0 left-0 w-full h-full">
          {images.map((src, index) => (
              <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                <Image
                    src={src}
                    alt={`image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    draggable="false"
                />
              </div>
          ))}
        </div>

        {/* Spacer divs to create scrollable area */}
        <div className="h-[100vh]" />
        {images.map((_, index) => (
            <div key={index} className="h-[100vh]" />
        ))}
      </div>
  );
}
