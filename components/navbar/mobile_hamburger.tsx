"use client";

import HambugerMenu from "../hambuger_menu";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useHamburgerStore from "@/stores/hambuger_menu/use_hambuger_store";
import useDownloadPdf from "@/hooks/use_download_pdf";
import useErrorModal from "@/stores/error_modal/use_error_modal";
import useIsDownloadingPDF from "@/stores/is_downloading_pdf/use_is_downloading_pdf";

export default function MobileHamburgerMenu() {
  const { phoneMenuClicked, set_phone_menu_clicked } = useHamburgerStore();
  const anchor = useRef<HTMLAnchorElement>(null);
  const { show_error_modal, set_show_error_modal } = useErrorModal();
  const { state, pdf_url, set_pdf_url, set_state } = useDownloadPdf();
  const { set_download, download } = useIsDownloadingPDF();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080 && phoneMenuClicked) {
        set_phone_menu_clicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [phoneMenuClicked, set_phone_menu_clicked]);

  useEffect(() => {
    if (state === "success") {
      if (phoneMenuClicked) anchor.current?.click();
      set_download(false);
      set_pdf_url("");
      set_state("initial");
      set_phone_menu_clicked(false);
    }
    if (state === "error") {
      set_show_error_modal(true);
      set_download(false);
      set_pdf_url("");
      set_state("initial");
      set_phone_menu_clicked(false);
    }
  }, [
    state,
    set_show_error_modal,
    set_download,
    set_state,
    set_pdf_url,
    set_phone_menu_clicked,
    phoneMenuClicked,
  ]);

  return (
    <div className="xd:flex hidden">
      <a
        href={pdf_url}
        ref={anchor}
        download="RussellOdhiamboResume.pdf"
        className="hidden"
      />
      <AnimatePresence>
        {phoneMenuClicked && !show_error_modal && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={` p-[1rem_1.25rem_2rem] bg-[#16171b] border-t-[1px] border-[#ffffff1a] bg-[url(/images/background.png)] bg-[0_0] bg-[size:200px] h-[100vh] bg-clip-border flex flex-[1_0_auto] flex-col top-[100%] left-0 right-0 overflow-auto absolute min-w-[200px]`}
          >
            <div className="text-[#a2a2a4] text-[1rem] leading-[1.5] block">
              <Link
                onClick={() => set_phone_menu_clicked(false)}
                href="/"
                className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
              >
                Home
              </Link>
              <Link
                onClick={() => set_phone_menu_clicked(false)}
                href="/services"
                className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
              >
                Services
              </Link>
              <Link
                onClick={() => set_phone_menu_clicked(false)}
                href="/resume"
                className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
              >
                Resume
              </Link>
              <Link
                onClick={() => set_phone_menu_clicked(false)}
                href="/projects"
                className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
              >
                Projects
              </Link>
              <Link
                onClick={() => set_phone_menu_clicked(false)}
                href="/blogs"
                className="hover:text-white w-auto font-normal py-3 font-[family-name:var(--font-input-sans)] mr-auto ml-auto block relative align-top"
              >
                Blogs
              </Link>
            </div>

            <div className="flex-col items-stretch mt-[1.5rem] ml-0 gap-x-[1rem] gap-y-[1rem] flex">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (!download) set_download(true);
                }}
                className={`${
                  download ? "cursor-not-allowed" : "cursor-pointer"
                } shadow-[0_0_0_1px_rgba(255,255,255,1)] justify-center flex tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal transition ease-in-out duration-200 hover:opacity-60 rounded-[.25rem]`}
              >
                Download CV
                <span className="ml-4">
                  {!download && (
                    <Image
                      src="/icons/download.svg"
                      width={20}
                      height={20}
                      alt=""
                    />
                  )}
                  {download && (
                    <div className="loader after:border-[#ff4d4d]"></div>
                  )}
                </span>
              </motion.div>

              <Link
                href="/hire"
                onClick={() => set_phone_menu_clicked(false)}
                className="shadow-[0_0_0_1px_rgba(255,77,77,1)] cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal hover:opacity-60 hover:outline-0 rounded-[.25rem]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <HambugerMenu />
    </div>
  );
}
