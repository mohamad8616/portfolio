import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const heroBtnStyle = "rounded-lg p-4 ring-1 ring-black";

export default function Hero() {
  return (
    <div className="gap-y-16px flex h-auto min-h-screen flex-col items-center gap-10 px-8 py-20 sm:gap-y-6 sm:px-8 md:mt-32 md:flex-row md:px-12 lg:px-20 xl:px-48">
      <div className="h-10/12 w-10/12 rounded-md rounded-b-xl md:w-1/2">
        <img
          alt="Hero illustration"
          src="/SnapBG.ai_1746638530893.png "
          className="w-full object-top grayscale transition-all duration-300 hover:grayscale-0"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="relative flex h-1/2 flex-col items-center justify-center gap-8 font-light md:h-full md:w-1/2">
        {/* TITLE */}
        <h1 className="z-20 transform text-start text-4xl font-medium text-white/60 md:absolute md:-top-28 md:w-[700px] md:-translate-x-20 md:text-7xl lg:-translate-x-10">
          {/* Hi, I&apos;m Mohammad. */}
          <TypeAnimation
            sequence={["I'm Mohamad", 1000, "Front-end Dev", 1000]}
            wrapper="h1"
            speed={200}
            repeat={Infinity}
          />
        </h1>
        {/* DESC */}
        <p className="md:mt-30 md:text-xl">
          A passionate front-end developer on a journey to craft beautiful and
          functional web experiences. I’m constantly learning and experimenting
          to bring ideas to life through code.
        </p>
        <p className="md:text-xl">
          While I may be new to the field, I’ve already built several projects
          that showcase my ability to turn concepts into reality. Every
          challenge I tackle teaches me something new, and I’m excited to grow
          with every line of code I write.
        </p>
        <p className="md:text-xl">
          I focus on clean, responsive design and intuitive user experiences. My
          goal is to create websites that not only look great but feel great to
          use.
        </p>
        <p className="md:text-xl">
          If you want to collaborate, chat, or simply geek out over front-end
          development, feel free to connect!
        </p>
        <div className="flex w-full gap-4">
          <Link
            href="portfolio"
            className={`${heroBtnStyle} transition-[background-color, color] duration-200ms bg-[#415A77] font-semibold text-[#fff] transition duration-200 ease-in-out hover:bg-[#E0E1DD] hover:text-[#415A77]`}
          >
            View my work
          </Link>
          <Link
            href="contact"
            className={`${heroBtnStyle} bg-[#415A77] font-semibold transition duration-200 ease-in-out hover:bg-[#E0E1DD] hover:text-[#415A77]`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
