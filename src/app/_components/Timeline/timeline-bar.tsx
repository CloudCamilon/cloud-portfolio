"use client";

import { useRef } from "react";
import Styles from "./timeline-bar.module.css";
import { motion, useScroll } from "framer-motion";

export const TimelineBar = ({
  barHeight,
}: {
  barHeight: number | undefined;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: barHeight }}
      className={Styles.progressBarWrapper}
    >
      <motion.div
        className={Styles.progressBar}
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};
