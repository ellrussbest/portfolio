"use client";

import useHamburgerStore from "@/stores/hambuger_menu/use_hambuger_store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaCode,
  FaFileWord,
  FaPaperPlane,
  FaCogs,
  FaBlogger,
} from "react-icons/fa";

export default function MobilePersistentMenu() {
  const current_path = usePathname();
  const { set_phone_menu_clicked } = useHamburgerStore();

  return (
    <div className="bg-[#0a0a0c] w-full fixed bottom-0 z-[1000] xl:hidden">
      <div className="shadow-[0_0_0_1px_rgba(255,255,255,0.1)] justify-center backdrop-blur-[40px] flex-1 gap-6 bg-[#16171bcc] bg-[0_0] bg-[size:200px] bg-[url(/images/background.png)] items-center w-full min-h-[4rem] mt-0 pl-[1.25rem] pr-[1.25rem] flex static inset-[0%_0%_auto]">
        <Link
          onClick={() => set_phone_menu_clicked(false)}
          href="/"
          className={`${
            current_path == "/" ? "text-[#ff4d4d]" : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          <>
            <FaHome />
            <span className="text-xs">Home</span>
          </>
        </Link>
        <Link
          href="/services"
          onClick={() => set_phone_menu_clicked(false)}
          className={`${
            current_path.includes("/services")
              ? "text-[#ff4d4d]"
              : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          <FaCogs />
          <span className="text-xs">Services</span>
        </Link>
        <Link
          onClick={() => set_phone_menu_clicked(false)}
          href="/resume"
          className={`${
            current_path.includes("/resume")
              ? "text-[#ff4d4d]"
              : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          <FaFileWord />
          <span className="text-xs">Resume</span>
        </Link>
        <Link
          onClick={() => set_phone_menu_clicked(false)}
          href="/projects"
          className={`${
            current_path.includes("/projects")
              ? "text-[#ff4d4d]"
              : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          <FaCode />
          <span className="text-xs">Projects</span>
        </Link>
        <Link
          onClick={() => set_phone_menu_clicked(false)}
          href="/blogs"
          className={`${
            current_path.includes("/blogs")
              ? "text-[#ff4d4d]"
              : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          <FaBlogger />
          <span className="text-xs">Blogs</span>
        </Link>
        <Link
          onClick={() => set_phone_menu_clicked(false)}
          href="/hire"
          className={`${
            current_path.includes("/hire") ? "text-[#ff4d4d]" : "text-[#a2a2a4]"
          } text-[24px] flex flex-col items-center justify-center`}
        >
          {" "}
          <FaPaperPlane />
          <span className="text-xs">Message</span>
        </Link>
      </div>
    </div>
  );
}
