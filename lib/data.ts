import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import superwizjacbtImg from "@/public/superwizjacbt.png";
import westImg from "@/public/westbouldering.png";
import mcourtImg from "@/public/budujemykorty.png";
import creativesImg from "@/public/507creatives.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const projectsData = [
  {
    title: "superwizjacbt.pl",
    description: `Next.js application facilitating registration process for psychiatric supervisions, now used by 150+ specialists`,
    tags: ["React", "Next.js", "Typescript", "Hygraph", "Styled Components"],
    imageUrl: superwizjacbtImg,
    href: "https://superwizjacbt.pl",
  },
  {
    title: "westbouldering.pl",
    description:
      "A website for a bouldering gym. It showcases gym offer, prices, location, contact information and upcoming events.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Hygraph", "SEO"],
    imageUrl: westImg,
    href: "https://westbouldering.pl",
  },
  {
    title: "budujemykorty.pl",
    description:
      "A website for a company that builds tennis courts. It showcases company offer contact information and past projects.",
    tags: ["React", "Next.js", "Tailwind", "SEO"],
    imageUrl: mcourtImg,
    href: "https://budujemykorty.pl",
  },
  {
    title: "507creatives.com.pl",
    description: `A simple "Work in progress" website for creative agency`,
    tags: ["React", "Next.js", "Tailwind", "SEO"],
    imageUrl: creativesImg,
    href: "https://507creatives.com.pl",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS/SCSS",
  "RWD",
  "Redux",
  "Framer Motion",
  "Formik",
  "React Query",
  "React Hook Form",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Cypress",
] as const;
