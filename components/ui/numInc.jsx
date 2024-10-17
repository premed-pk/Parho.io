'use client';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
function NumInc({ num, delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    animate(count, isInView ? num : 0, {
      duration: 2,
      delay: delay,
    });
  }, [isInView]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default NumInc;
