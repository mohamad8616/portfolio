"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Portfolio from "@/components/portfolio";
import Link from "next/link";
const heroBtnStyle = "rounded-lg p-4 ring-1 ring-black";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="gap-y-16px-4 flex min-h-full flex-col items-center px-8 py-20 sm:gap-y-6 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        <div className="relative h-[500px] w-full lg:h-[700px] lg:w-1/2">
          <Image
            alt="Hero illustration"
            src="/hero.png"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 md:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            crafting digital experience, designing tomorrow
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hey, I’m Mohamad—a passionate front-end developer on a journey to
            craft beautiful and functional web experiences. I’m constantly
            learning and experimenting to bring ideas to life through code.
          </p>
          <p className="md:text-xl">
            While I may be new to the field, I’ve already built several projects
            that showcase my ability to turn concepts into reality. Every
            challenge I tackle teaches me something new, and I’m excited to grow
            with every line of code I write.
          </p>
          <p className="md:text-xl">
            I focus on clean, responsive design and intuitive user experiences.
            My goal is to create websites that not only look great but feel
            great to use.
          </p>
          <p className="md:text-xl">
            If you want to collaborate, chat, or simply geek out over front-end
            development, feel free to connect!
          </p>
          <div className="flex w-full gap-4">
            <Link
              href="portfolio"
              className={`${heroBtnStyle} bg-black text-white`}
            >
              View my work
            </Link>
            <Link href="contact" className={heroBtnStyle}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Portfolio />
    </motion.div>
  );
};

export default Homepage;
