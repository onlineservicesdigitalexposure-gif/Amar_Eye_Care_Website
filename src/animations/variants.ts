import type { Variants } from "framer-motion";

// 1. Standard Clinical Easing Curve (Smooth, non-bouncy)
export const clinicalEase = [0.25, 0.1, 0.25, 1] as const;

// 2. Container Stagger Animation
// Use this on parent components to stagger the entrance of children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const slowStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// 3. Fade Up / Scroll Reveal Animations
// Use this on children inside a staggered container or for manual scroll reveals
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: clinicalEase,
    },
  },
};

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: clinicalEase,
    },
  },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: clinicalEase,
    },
  },
};

// 4. Hover Animations
// Use these directly in the `whileHover` prop
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

export const hoverLift = {
  y: -5,
  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  transition: { duration: 0.3, ease: clinicalEase },
};

// 5. Shared Viewport Config for Scroll Reveal
// Use this in the `viewport` prop of motion components to trigger only once
export const onceViewport = { once: true, margin: "-100px" };
