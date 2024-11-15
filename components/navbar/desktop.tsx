"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActionNavIndicator from "./active_nav_indicator";
import { motion } from "framer-motion";
import useDownloadPdf from "@/hooks/use_download_pdf";
import { useRef } from "react";
import useErrorModal from "@/stores/error_modal/use_error_modal";

export default function DesktopNav() {
  const current_path = usePathname();
  const { state, pdf_url } = useDownloadPdf();
  const { set_show_error_modal } = useErrorModal();
  const anchor = useRef<HTMLAnchorElement>(null);

  const download_pdf = () => {
    if (state === "success") anchor.current?.click();
    if (state === "error") {
      set_show_error_modal(true);
    }
  };

  return (
    <nav className="xd:hidden flex-[1_0_auto] justify-between items-center flex static float-right">
      <a
        href={pdf_url}
        ref={anchor}
        download="russell_resume.pdf"
        className="hidden"
      />
      <div className="text-[1rem] text-[#a2a2a4]">
        <Link
          href="/"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Home
          <ActionNavIndicator show={current_path == "/"} />
        </Link>
        <Link
          href="/services"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Services
          <ActionNavIndicator show={current_path == "/services"} />
        </Link>
        <Link
          href="/resume"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Resume
          <ActionNavIndicator show={current_path == "/resume"} />
        </Link>
        <Link
          href="/projects"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Projects
          <ActionNavIndicator show={current_path == "/projects"} />
        </Link>
        <Link
          href="/blogs"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Blogs
          <ActionNavIndicator show={current_path == "/blogs"} />
        </Link>
      </div>

      <div className="gap-x-[1rem] gap-y-[1rem] items-center ml-4 flex">
        <motion.div
          onClick={download_pdf}
          whileHover={{ scale: 1.05 }}
          className="shadow-[0_0_0_1px_rgba(255,255,255,1)] flex cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal transition ease-in-out duration-200 hover:opacity-60 rounded-[.25rem]"
        >
          Download CV
          <span className="ml-4">
            <Image src="/icons/download.svg" width={20} height={20} alt="" />
          </span>
        </motion.div>

        <Link
          href="/hire"
          className="shadow-[0_0_0_1px_rgba(255,77,77,1)] cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal hover:opacity-60 hover:outline-0 rounded-[.25rem]"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
