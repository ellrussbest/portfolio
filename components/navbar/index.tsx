import Link from "next/link";
import DesktopNav from "./desktop";
import MobileHamburgerMenu from "./mobile_hamburger";
import MobilePersistentMenu from "./mobile_persistent";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#0a0a0c] w-full fixed top-0 z-[1000]">
        <div className="shadow-[0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-[40px] bg-[#16171bcc] bg-[0_0] bg-[size:200px] bg-[url(/images/background.png)] items-center w-full min-h-[4.5rem] xd:min-h-[4rem] mt-0 pl-[2.5rem] pr-[2.5rem] xd:pl-[1.25rem] xd:pr-[1.25rem] flex static inset-[0%_0%_auto]">
          <div className="flex gap-x-[1.5rem] gap-y-[1.5rem] flex-1 justify-between items-center w-full h-full ml-auto mr-auto">
            <Link href="/" className="flex-[0_auto] pl-0 float-left relative">
              <span className="bg-gradient-to-r from-[#f29871] to-[#ff4d4d] bg-clip-text font-[family-name:var(--font-input-sans)] font-normal text-[2.5rem] leading-[1.1] text-transparent">
                Russell.
              </span>
            </Link>

            <DesktopNav />
            <MobileHamburgerMenu />
          </div>
        </div>
      </div>
      <MobilePersistentMenu />
    </>
  );
}
