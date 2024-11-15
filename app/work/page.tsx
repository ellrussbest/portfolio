"use client";

import "swiper/css";
import PageTransition from "@/components/page_transition";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SwiperButtons from "@/components/swiper_buttons";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Notebook",
    description: "An online JavaScript & ReactJs IDE & Compiler.",
    stack: [
      { name: "ReactJs" },
      { name: "Typescript" },
      { name: "Redux" },
      { name: "es-build" },
    ],
    image: "/images/notebook.png",
    live: "https://notebook-hazel.vercel.app/",
    github: "https://github.com/ellrussbest/notebook",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Web3 Marketplace",
    description: "An online web3 marketplace powered by Ethereum.",
    stack: [
      { name: "Solidity" },
      { name: "Next.Js" },
      { name: "Tailwind" },
      { name: "web3" },
    ],
    image: "/images/marketplace_eth.png",
    live: "https://marketplace-eth-five.vercel.app/",
    github: "https://github.com/ellrussbest/marketplace-eth",
  },
  {
    num: "03",
    category: "Blockchain",
    title: "Blockchain Network",
    description:
      "A personal Blockchain network simulating Bitcoin's Consensus & Verification algorithms",
    stack: [
      { name: "ReactJs" },
      { name: "Typescript" },
      { name: "Jest" },
      { name: "PubNub" },
      { name: "Redis" },
      { name: "ExpressJs" },
    ],
    image: "/images/blockchain.png",
    github: "https://github.com/ellrussbest/Blockchain",
  },
];

export default function Work() {
  const [project, set_project] = useState(projects[0]);

  const handle_slide_change = (swiper: any) => {
    const idx = swiper.activeIndex;
    set_project(projects[idx]);
  };

  return (
    <PageTransition>
      <div className="min-h-[60vh] flex flex-col justify-center xd:py-12 py-24 xd:px-0">
        <div className="container mx-auto">
          <div className="flex xd:flex-col flex-row xd:gap-0 gap-[30px]">
            <div className="xd:w-full w-[50%] flex flex-col justify-between xd:order-2 order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#ff4d4d] transition-all duration-500 capitalize">
                  {project.category} project
                </h2>

                <p className="text-white/60">{project.description}</p>

                <ul className="flex gap-2 flex-wrap">
                  {project.stack.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="xd:text-[12px] text-xl text-[#ff4d4d]"
                      >
                        {item.name}
                        {idx !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>

                <div className="border border-white/20"></div>

                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] flex rounded-full bg-white/5 justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-[#ff4d4d]" />
                          </TooltipTrigger>

                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-[#ff4d4d]" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            <div className="xd:w-full w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="mb-12 h-[520px]"
                onSlideChange={handle_slide_change}
              >
                {projects.map((project, idx) => {
                  return (
                    <SwiperSlide key={idx} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                <SwiperButtons
                  container_styles="flex gap-2 absolute right-0 xd:bottom-[calc(50%_-_22px)] bottom-0 z-20 xd:w-full w-max xd:justify-between justify-none"
                  btn_styles="bg-[#ff4d4d] hover:bg-[#f29871] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
