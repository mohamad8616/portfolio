"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa6";
const text = "Get In Touch";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-auto min-h-screen w-full overflow-y-scroll py-20"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mb-20 flex h-full w-full items-center justify-center px-1 sm:px-4 md:px-12 lg:px-20 xl:px-48">
        <div className="mx-6 flex h-full w-full flex-col items-center justify-center space-y-12 py-16 text-3xl md:mx-0 md:text-5xl lg:text-6xl">
          <h1 className="font-bold text-[var(--btn-ternary)] dark:text-gray-200">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}

            <span role="img" aria-label="Smiling face">
              😊
            </span>
          </h1>

          <div className="flex w-full flex-col items-stretch justify-between gap-10 lg:flex-row">
            <div className="rounded-lg bg-[var(--btn-ternary)] px-8 py-10 shadow-lg dark:bg-gray-800 lg:w-1/2">
              <h2 className="mb-6 border-b-2 border-gray-200 pb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Contact me
              </h2>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                I&apos;m available . Don&apos;t hesitate to reach out!
              </p>
              <p className="flex items-center text-lg text-gray-600 dark:text-gray-400">
                <FaWhatsapp
                  className="mr-2 text-green-500"
                  aria-hidden="true"
                />
                <span className="sr-only">WhatsApp:</span>
                <a
                  href="https://wa.me/989333449036"
                  className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  (Click): (+98) 933 344 9036
                </a>
              </p>
              <a
                href="mailto:mohamad.sh.a9036@gmail.com"
                className="text-lg text-gray-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-400"
              >
                @ mohamad.sh.a9036@gmail.com
              </a>
            </div>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="rounded-lg bg-[var(--btn-ternary)] p-8 text-lg shadow-lg dark:bg-gray-800 lg:w-1/2"
            >
              <label
                htmlFor="user_message"
                className="mb-2 block text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Your message:
              </label>
              <textarea
                id="user_message"
                rows={5}
                className="mb-4 w-full resize-none rounded-md border border-gray-300 bg-transparent p-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-300"
                name="user_message"
                placeholder="Write your message here..."
                required
              />
              <label
                htmlFor="user_email"
                className="mb-2 block text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Your email address:
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="’example@example.com’"
                className="mb-6 w-full rounded-md border border-gray-300 bg-transparent p-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-300"
                required
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 p-3 text-lg font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
              {success && (
                <p
                  className="mt-4 text-center font-semibold text-green-600 dark:text-green-400"
                  role="status"
                >
                  Your message has been sent successfully!
                </p>
              )}
              {error && (
                <p
                  className="mt-4 text-center font-semibold text-red-600 dark:text-red-400"
                  role="alert"
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
