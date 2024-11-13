"use client";

import { motion } from "framer-motion";
import React from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
