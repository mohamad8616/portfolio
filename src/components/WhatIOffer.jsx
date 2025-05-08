"use client";

import { motion } from "framer-motion";

const h2Style =
  "mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl text-yellow-500";
const pStyle = "text-sm text-gray-300 sm:text-base";
const cardStyle =
  "rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10 sm:p-6";

const cards = [
  {
    title: "Web Development",
    description:
      "Creating modern, responsive, and performant web applications using React, Next.js, and other cutting-edge technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces with a focus on user experience and modern design principles.",
  },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end development services from database design to frontend implementation and deployment.",
  },
  {
    title: "API Development",
    description:
      "Creating robust RESTful and GraphQL APIs with proper documentation, authentication, and security best practices.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing application performance through code optimization, caching strategies, and efficient resource management.",
  },
];

export default function WhatIOffer() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 150 }}
      transition={{ duration: 0.8 }}
    >
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12">
        <h1 className="mb-12 text-3xl font-bold text-white/80 sm:mb-16 sm:text-4xl md:mb-20 md:text-5xl lg:mb-24 lg:text-7xl">
          What I Offer
        </h1>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.title} className={cardStyle}>
              <h2 className={h2Style}>{card.title}</h2>
              <p className={pStyle}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
