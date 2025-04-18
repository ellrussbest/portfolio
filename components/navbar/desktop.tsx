"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActionNavIndicator from "./active_nav_indicator";
import { motion } from "framer-motion";
import useDownloadPdf from "@/hooks/use_download_pdf";
import { useEffect, useRef, useState } from "react";
import useErrorModal from "@/stores/error_modal/use_error_modal";
import useIsDownloadingPDF from "@/stores/is_downloading_pdf/use_is_downloading_pdf";

export default function DesktopNav() {
  const current_path = usePathname();
  const { state, pdf_url, set_pdf_url, set_state } = useDownloadPdf();
  const { set_show_error_modal } = useErrorModal();
  const anchor = useRef<HTMLAnchorElement>(null);
  const { set_download, download } = useIsDownloadingPDF();
  const [desktop_menu_clicked, set_desktop_menu_clicked] = useState(false);

  useEffect(() => {
    if (state === "success") {
      if (desktop_menu_clicked) anchor.current?.click();
      set_download(false);
      set_pdf_url("");
      set_state("initial");
      set_desktop_menu_clicked(false);
    }
    if (state === "error") {
      set_show_error_modal(true);
      set_download(false);
      set_pdf_url("");
      set_state("initial");
      set_desktop_menu_clicked(false);
    }
  }, [
    state,
    set_show_error_modal,
    set_download,
    set_state,
    set_pdf_url,
    desktop_menu_clicked,
  ]);

  return (
    <nav className="xd:hidden flex-[1_0_auto] justify-between items-center flex static float-right">
      <a
        href={pdf_url}
        ref={anchor}
        download="RussellOdhiamboResume.pdf"
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
          <ActionNavIndicator show={current_path.includes("/services")} />
        </Link>
        <Link
          href="/resume"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Resume
          <ActionNavIndicator show={current_path.includes("/resume")} />
        </Link>
        <Link
          href="/projects"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Projects
          <ActionNavIndicator show={current_path.includes("/projects")} />
        </Link>
        <Link
          href="/blogs"
          className={`hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative`}
        >
          Blogs
          <ActionNavIndicator show={current_path.includes("/blogs")} />
        </Link>
      </div>

      <div className="gap-x-[1rem] gap-y-[1rem] items-center ml-4 flex">
        <motion.div
          onClick={() => {
            set_desktop_menu_clicked(true);
            if (!download) set_download(true);
          }}
          whileHover={{ scale: 1.05 }}
          className={`${
            download ? "cursor-not-allowed" : "cursor-pointer"
          } shadow-[0_0_0_1px_rgba(255,255,255,1)] flex  tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal transition ease-in-out duration-200 hover:opacity-60 rounded-[.25rem]`}
        >
          Download CV
          <span className="ml-4">
            {!download && (
              <Image
                priority
                src="/icons/download.svg"
                width={20}
                height={20}
                alt=""
              />
            )}
            {download && <div className="loader after:border-[#ff4d4d]"></div>}
          </span>
        </motion.div>

        <Link
          href="/hire"
          className="shadow-[0_0_0_1px_rgba(255,77,77,1)] cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal hover:opacity-60 hover:outline-0 rounded-[.25rem]"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
