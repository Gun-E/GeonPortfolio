"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/1.svg",
  "/images/2.svg",
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

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

        <div className="h-[100vh]" />
        {images.map((_, index) => (
            <div key={index} className="h-[100vh]" />
        ))}
      </div>
  );
}
