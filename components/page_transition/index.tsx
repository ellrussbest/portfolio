"use client";

import useErrorModal from "@/stores/error_modal/use_error_modal";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { show_error_modal } = useErrorModal();

  return (
    <>
      {show_error_modal && <div> Error Modal </div>}
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
