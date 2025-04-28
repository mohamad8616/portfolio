"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { items } from "@/utility/data";
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      <div className="relative h-[200vh]" ref={ref}>
        <div className="sticky top-0 flex h-screen items-center gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex" id="portfolio">
            {/* <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> */}
            {items.map((item) => (
              <div
                className={`flex h-screen w-screen items-center justify-center`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="mt-16 text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative h-56 w-80 md:h-64 md:w-96 lg:h-[350px] lg:w-[500px] xl:h-[420px] xl:w-[600px]">
                    <Image
                      src="/casablanca-hotel.webp"
                      alt={item.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="md:w96 w-80 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="md:text-md m-4 rounded bg-white p-2 text-sm font-semibold text-gray-600 md:p-4 lg:p-8 lg:text-lg">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 text-center">
        <h1 className="text-4xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="h-64 w-64 md:h-[500px] md:w-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white md:h-28 md:w-28"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
