import PageTransition from "@/components/page_transition";
import Photo from "@/components/photo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageTransition>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-row xd:flex-col items-center justify-between pt-24 xd:pt-6">
            <div className="xd:text-center text-left xd:order-2 order-none">
              <span className="text-sm">Software Developer</span>
              <h1 className="h1 mb-6">
                I&apos;m <br />{" "}
                <span className="bg-gradient-to-r from-[#f29871] to-[#ff4d4d] text-transparent bg-clip-text">
                  {" "}
                  Russell Odhiambo{" "}
                </span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80 text-xl xd:text-[1rem]">
                A passionate software developer with a deep love for C++ and a
                strong command of Next.js, Python, and ROS2.
              </p>

              <div className="flex items-center gap-6 xd:justify-center">
                <span className="text-xs">Let&apos;s Connect: </span>
                <Link href="https://www.youtube.com/@o_russell" target="_blank">
                  <Image
                    src="/icons/youtube.svg"
                    priority
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link
                  href="http://linkedin.com/in/russell-best"
                  target="_blank"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    priority
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
                <Link href="https://github.com/ellrussbest" target="_blank">
                  <Image
                    src="/icons/github.svg"
                    priority
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="xd:order-1 order-none xd:mb-8 mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
