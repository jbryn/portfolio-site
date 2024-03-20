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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "superwizjacbt.pl",
    description: `Next.js application facilitating registration process for psychiatric supervisions, now used by 150+ specialists`,
    tags: ["React", "Next.js", "Typescript", "Hygraph", "Styled Components"],
    imageUrl: superwizjacbtImg,
  },
  {
    title: "westbouldering.pl",
    description:
      "A website for a bouldering gym. It showcases gym offer, prices, location, contact information and upcoming events.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Hygraph", "SEO"],
    imageUrl: westImg,
  },
  {
    title: "budujemykorty.pl",
    description:
      "A website for a company that builds tennis courts. It showcases company offer contact information and past projects.",
    tags: ["React", "Next.js", "Tailwind", "SEO"],
    imageUrl: mcourtImg,
  },
  {
    title: "507creatives.com.pl",
    description: `A simple "Work in progress" website for creative agency`,
    tags: ["React", "Next.js", "Tailwind", "SEO"],
    imageUrl: creativesImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "RWD",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
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
