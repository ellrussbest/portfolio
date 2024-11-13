"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div className="xd:w-[298px] xd:h-[298px] w-[498px] h-[498px] mix-blend-lighten opacity-50 overflow-hidden rounded-full relative border-4 border-[#f29871] border-dotted">
        <Image
          src="/images/profile.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
