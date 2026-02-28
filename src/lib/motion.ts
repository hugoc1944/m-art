// src/lib/motion.ts

import type { Transition } from "framer-motion";

export const editorialEase: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

export const fastTransition: Transition = {
  duration: 0.25,
  ease: editorialEase,
};

export const mediumTransition: Transition = {
  duration: 0.35,
  ease: editorialEase,
};