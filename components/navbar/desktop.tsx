import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="xd:hidden flex-[1_0_auto] justify-between items-center flex static float-right">
      <div className="text-[1rem] text-[#a2a2a4]">
        <Link
          href="/"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Services
        </Link>
        <Link
          href="/resume"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Resume
        </Link>
        <Link
          href="/work"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Work
        </Link>
        <Link
          href="/contact"
          className="hover:text-white p-[.5rem_1rem] font-[family-name:var(--font-input-sans)] font-normal align-top text-left ml-auto mr-auto inline-block relative"
        >
          Contact
        </Link>
      </div>

      <div className="gap-x-[1rem] gap-y-[1rem] items-center ml-4 flex">
        <div className="shadow-[0_0_0_1px_rgba(255,255,255,1)] flex cursor-pointer tracking-[.04rem] text-white bg-[#0000] p-[.5rem_1.25rem_.35rem] text-[1rem] text-center font-[family-name:var(--font-input-sans)] font-normal transition ease-in-out duration-200 hover:opacity-60 rounded-[.25rem]">
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
  );
}
