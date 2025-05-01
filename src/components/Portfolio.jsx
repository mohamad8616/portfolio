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
        <div className="sticky top-0 flex h-screen w-full items-center gap-2 overflow-hidden">
          <motion.div style={{ x }} className="flex" id="portfolio">
            {/* <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> */}
            {items.map((item) => (
              <div
                className={`flex h-screen w-screen items-center justify-center`}
                key={item.id}
              >
                <div className="flex h-4/5 w-3/4 flex-col items-center justify-center gap-2 px-4 text-white">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-y-5 py-10 sm:w-3/4 md:w-10/12">
                    <h1 className="text-xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
                      {item.title}
                    </h1>
                    <div className="relative aspect-video h-full w-full">
                      <Image
                        src="/casablanca-hotel.webp"
                        alt={item.title}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="w-full lg:text-lg">{item.desc}</p>
                    <Link href={item.link} className="flex place-self-start">
                      <button className="md:text-md my-1 transform rounded bg-[var(--btn-primary)] p-2 text-sm font-semibold text-[var(--btn-ternary)] transition-colors duration-200 hover:bg-[--btn-ternary] hover:text-[--primary] md:p-2 lg:px-4 lg:text-lg">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-16 text-center">
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
            <text fill="#dedede">
              <textPath
                xlinkHref="#circlePath"
                className="text-[var(--btn-ternary]) text-xl"
              >
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white md:h-28 md:w-28"
          >
            Tell me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
