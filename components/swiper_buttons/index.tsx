"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function SwiperButtons({
  container_styles,
  btn_styles,
}: {
  container_styles: string;
  btn_styles: string;
}) {
  const swiper = useSwiper();

  return (
    <motion.div
      className={container_styles}
      animate={{
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
        transition: {
          repeat: Infinity,
          repeatDelay: 5,
          repeatType: "loop",
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <button
        className={btn_styles}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <PiCaretLeftBold />
      </button>

      <button
        className={btn_styles}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <PiCaretRightBold />
      </button>
    </motion.div>
  );
}
