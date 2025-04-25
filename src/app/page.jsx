"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const heroBtnStyle = "rounded-lg p-4 ring-1 ring-black";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="gap-y-16px-4 flex h-full flex-col items-center sm:gap-y-6 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}

        {/* <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            alt="hero"
            src="/hero.png"
            fill
            className="z-0 object-contain"
          />
        </div> */}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ratione dicta iusto fuga velit nihil ipsum, sequi nostrum, nemo
            porro ipsam quia eaque iure et molestiae exercitationem quasi.
            Explicabo doloremque magni corrupti maiores earum? Provident et a
            culpa inventore recusandae!
          </p>
          <div className="flex w-full gap-4">
            <button className={`${heroBtnStyle} bg-black text-white`}>
              View my work
            </button>
            <button className={heroBtnStyle}>Contact</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
