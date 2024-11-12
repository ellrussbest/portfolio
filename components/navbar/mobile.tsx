"use client";

import use_hambuger_store from "@/stores/hambuger_menu/use_hambuger_store";
import HambugerMenu from "../hambuger_menu";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function MobileNav() {
  const { phoneMenuClicked, set_phone_menu_clicked } = use_hambuger_store();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && phoneMenuClicked) {
        set_phone_menu_clicked();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [phoneMenuClicked]);

  return (
    <div className="xd:flex hidden">
      <nav
        className={`${
          phoneMenuClicked ? "block" : "hidden"
        } transform transition-all translate-x-0 translate-y-0 p-[1rem_1.25rem_2rem] bg-[#16171b] border-t-[1px] border-[#ffffff1a] bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] h-[100vh] bg-clip-border flex flex-[1_0_auto] flex-col top-[100%] left-0 right-0 overflow-auto absolute min-w-[200px]`}
      >
        <div className="text-[#a2a2a4] text-[1rem] leading-[1.5] block">
          <Link
            onClick={() => set_phone_menu_clicked()}
            href="/"
            className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
          >
            Home
          </Link>
          <Link
            onClick={() => set_phone_menu_clicked()}
            href="/services"
            className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
          >
            Services
          </Link>
          <Link
            onClick={() => set_phone_menu_clicked()}
            href="/resume"
            className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
          >
            Resume
          </Link>
          <Link
            onClick={() => set_phone_menu_clicked()}
            href="/work"
            className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
          >
            Work
          </Link>
          <Link
            onClick={() => set_phone_menu_clicked()}
            href="/contact"
            className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
          >
            Contact
          </Link>
        </div>

        <div className="flex-col items-stretch mt-[1.5rem] ml-0 gap-x-[1rem] gap-y-[1rem] flex">
          <div className="shadow-[0_0_0_1px_rgba(255,255,255,1)] justify-center flex cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal transition ease-in-out duration-200 hover:opacity-60 rounded-[.25rem]">
            Download CV
            <span className="ml-4">
              <Image src="/icons/download.svg" width={20} height={20} alt="" />
            </span>
          </div>

          <Link
            href="/hire"
            className="shadow-[0_0_0_1px_rgba(255,77,77,1)] cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal hover:opacity-60 hover:outline-0 rounded-[.25rem]"
          >
            Hire Me
          </Link>
        </div>
      </nav>
      <HambugerMenu />
    </div>
  );
}
