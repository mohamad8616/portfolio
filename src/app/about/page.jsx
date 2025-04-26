"use client";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-28 px-4 sm:px-8 md:gap-32 md:px-12 lg:w-2/3 lg:gap-48 lg:px-20 lg:pr-0 xl:gap-64 xl:px-24">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* heading */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>
            {/* desc */}
            <p className="italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              eum nemo non accusamus iure recusandae maiores ab a. Ex quis enim
              nisi laborum saepe deleniti, ea modi pariatur porro dolores soluta
              sequi exercitationem doloremque necessitatibus ad, adipisci
              nesciunt nulla iste!
            </p>
            {/* quots */}
            <br />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            {/* signature */}
            <div className="self-end">
              <svg
                width="175"
                height="100"
                viewBox="0 0 1025 459"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="175" height="100" fill="" />
                <path
                  d="M524 192C495.931 186.018 468.782 174.466 443.778 160.556C401.705 137.15 359.311 101.546 341.444 55.2778C329.608 24.6254 354.2 8.78164 380.556 3.22222C385.922 2.09032 392.901 0.899371 398.222 2.88889C413.282 8.51977 410.927 27.6563 406.556 39.4444C394.286 72.5277 353.651 95.3668 353.444 132.889C353.237 170.661 414.954 134.071 428.111 126.667C460.552 108.411 493.487 92.7402 528.667 80.4444C550.876 72.682 573.903 66.2724 595.333 56.4444C598.996 54.7647 606.519 52.5843 609 49C611.56 45.3022 601.072 53.2772 597.333 55.7778C542.557 92.4186 488.871 131.005 435.556 169.722C324.923 250.064 221.068 338.621 114 423.5C99.5573 434.95 84.3788 445.497 70 457"
                  stroke="darkBlue"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M535.206 433.606C457.773 431.923 380.851 420.173 305.016 404.967C225.257 388.975 145.808 367.221 73.142 329.882C49.2189 317.589 25.931 303.6 8.52522 282.713C6.86933 280.726 2.38843 271.202 2.38843 276.697C2.38843 294.243 3.81629 314.11 16.3466 327.476C36.0503 348.493 59.4591 353.467 87.8221 353.467C197.1 353.467 304.424 348.085 412.952 333.251C580.399 310.364 746.099 288.489 915.326 288.489C951.064 288.489 986.801 288.489 1022.54 288.489"
                  stroke="darkBlue"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          {/* scroll svg */}
          <div>
            <svg
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
                data-name="2-Arrow Down"
              />
            </svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* heading */}
            <h1 className="text-2xl font-bold">SKILLS</h1>
            {/* skill list */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Java script
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                HTML
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Css
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Git
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Github
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                React
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Testing
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Type script
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                ssr
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Next
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Cms
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Responsive design
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Tailwind
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Bootsrap
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                Framer motion
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                redux
              </div>{" "}
              <div className="inline-block cursor-pointer rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black">
                react query
              </div>{" "}
            </div>
          </div>

          {/* scroll svg */}
          <div>
            <svg
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M26.29 20.29 18 28.59V0h-2v28.59l-8.29-8.3-1.42 1.42 10 10a1 1 0 0 0 1.41 0l10-10z"
                data-name="2-Arrow Down"
              />
            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="mx-auto w-full max-w-4xl px-4 py-16">
            {/* heading */}
            <h1 className="mb-16 text-center text-3xl font-bold uppercase tracking-wider">
              Work Experiences
            </h1>

            {/* experience timeline */}
            <div className="relative">
              {/* vertical timeline */}
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-red-400 to-gray-300"></div>

              {/* experience items */}
              <div className="space-y-24">
                {/* experience item 1 */}
                <div className="flex w-full">
                  {/* left content */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800">
                        Senior JavaScript Engineer
                      </h3>
                      <p className="mt-2 italic text-gray-600">
                        Developed innovative web applications and led frontend
                        architecture
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-red-500">
                          2022 - Present
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                          Apple
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* timeline marker */}
                  <div className="relative flex w-8 flex-shrink-0 items-center justify-center">
                    <div className="z-10 h-6 w-6 rounded-full border-4 border-red-400 bg-white"></div>
                  </div>

                  {/* right spacer */}
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* experience item 2 */}
                <div className="flex w-full">
                  {/* left spacer */}
                  <div className="w-1/2 pr-8"></div>

                  {/* timeline marker */}
                  <div className="relative flex w-8 flex-shrink-0 items-center justify-center">
                    <div className="z-10 h-6 w-6 rounded-full border-4 border-red-400 bg-white"></div>
                  </div>

                  {/* right content */}
                  <div className="w-1/2 pl-8">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800">
                        Frontend Developer
                      </h3>
                      <p className="mt-2 italic text-gray-600">
                        Built responsive UIs and collaborated with design teams
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-red-500">
                          2020 - 2022
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                          Google
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* experience item 3 */}
                <div className="flex w-full">
                  {/* left content */}
                  <div className="w-1/2 pr-8 text-right">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                      <h3 className="text-xl font-bold text-gray-800">
                        Junior Developer
                      </h3>
                      <p className="mt-2 italic text-gray-600">
                        Implemented features and fixed bugs in existing
                        applications
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-red-500">
                          2018 - 2020
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                          Microsoft
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* timeline marker */}
                  <div className="relative flex w-8 flex-shrink-0 items-center justify-center">
                    <div className="z-10 h-6 w-6 rounded-full border-4 border-red-400 bg-white"></div>
                  </div>

                  {/* right spacer */}
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="w- hidden w-1/3 lg:block xl:w-1/2"></div>
      </div>
    </motion.div>
  );
}

export default About;
