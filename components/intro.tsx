"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="grid grid-cols-1 w-full items-center gap-[60px] pb-[60px] sm:grid-rows-1 sm:grid-cols-2">
        <div>
          <motion.h1
            className="mb-10 mt-4 px-4 font-bold text-4xl sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, my name is Jan
          </motion.h1>
          <motion.p
            className="mb-10 mt-4 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Fullstack developer with strong passion for Frontend Development.
            Focused on crafting websites and web applications. Skilled in
            React.js and Next.js
          </motion.p>
        </div>
        <motion.div
          className="grid place-items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/jbryn.jpg"
            alt="Jbryn portrait"
            width="500"
            height="500"
            quality="95"
            priority={true}
            className="object-cover shadow-xl rounded-md"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Jan_Brynski_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex items-center gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/jan-brynski/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/jbryn"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="mailto:brynski.jan@gmail.com"
            target="_blank"
          >
            <MdEmail />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
