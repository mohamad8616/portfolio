"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="h-auto min-h-screen w-screen bg-gradient-to-b from-stone-300 to-blue-300"
      >
        <motion.div
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-black"
        />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default text-8xl text-white"
        >
          {pathName.slice(1)}
        </motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-auto min-h-[calc(100vh-6rem)]">{children}</div>
      </div>
      ;
    </AnimatePresence>
  );
}

export default TransitionProvider;
