"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { fastTransition } from "@/lib/motion";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";
import React from "react";

/* =====================================================
   BASE
===================================================== */

const buttonBase =
  "relative inline-flex items-center justify-center uppercase rounded-none whitespace-nowrap overflow-hidden";

/* =====================================================
   VARIANTS
===================================================== */

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      solid: "",
      outline: "border",
    },
    tone: {
      dark: "",
      light: "",
    },
    size: {
      sm: "h-[39px] text-[11px] font-extrabold tracking-[-0.55px] px-[26px]",
      md: "h-[39px] text-[14px] font-extrabold tracking-[-0.7px] px-[26px]",
    },
  },
  defaultVariants: {
    variant: "solid",
    tone: "dark",
    size: "md",
  },
});

/* =====================================================
   TYPES
===================================================== */

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  icon?: IconName;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

/* =====================================================
   COMPONENT
===================================================== */

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "solid",
  tone = "dark",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  disabled = false,
}: ButtonProps) {
  const isSolid = variant === "solid";
  const isDark = tone === "dark";

  /* -------------------------------------------------
     COLORS (RESTORED ORIGINAL BEHAVIOR)
  ------------------------------------------------- */

  const baseBg = isSolid
    ? isDark
      ? "var(--color-warm-black)"
      : "var(--color-white)"
    : "transparent";

  const hoverBg = isSolid
    ? isDark
      ? "var(--color-white)"
      : "var(--color-warm-black)"
    : isDark
    ? "var(--color-warm-black)"
    : "var(--color-white)";

  const baseText = isSolid
    ? isDark
      ? "var(--color-white)"
      : "var(--color-warm-black)"
    : isDark
    ? "var(--color-warm-black)"
    : "var(--color-white)";

  const hoverText = isSolid
    ? isDark
      ? "var(--color-warm-black)"
      : "var(--color-white)"
    : isDark
    ? "var(--color-white)"
    : "var(--color-warm-black)";

  const borderClass =
    variant === "outline"
      ? isDark
        ? "border border-[var(--color-warm-black)]"
        : "border border-[var(--color-white)]"
      : "";

  const sharedClasses = cn(
    buttonVariants({ variant, tone, size }),
    borderClass,
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {/* Animated Background Layer */}
      <motion.span
        className="absolute inset-0"
        variants={
          disabled
            ? undefined
            : {
                rest: { backgroundColor: baseBg },
                hover: { backgroundColor: hoverBg },
              }
        }
        transition={fastTransition}
      />

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        variants={
          disabled
            ? undefined
            : {
                rest: { color: baseText },
                hover: { color: hoverText },
              }
        }
        transition={fastTransition}
      >
        {icon && iconPosition === "left" && (
          <motion.span
            variants={
              disabled
                ? undefined
                : {
                    rest: { x: 0 },
                    hover: { x: 3 },
                  }
            }
            transition={fastTransition}
          >
            <Icon icon={icon} />
          </motion.span>
        )}

        <span>{children}</span>

        {icon && iconPosition === "right" && (
          <motion.span
            variants={
              disabled
                ? undefined
                : {
                    rest: { x: 0 },
                    hover: { x: 3 },
                  }
            }
            transition={fastTransition}
          >
            <Icon icon={icon} />
          </motion.span>
        )}
      </motion.span>
    </>
  );

  const motionProps = disabled
    ? {}
    : {
        initial: "rest",
        whileHover: "hover",
        animate: "rest",
        whileTap: "tap",
        variants: {
          rest: { y: 0, scale: 1 },
          hover: { y: -1 },
          tap: { scale: 0.98 },
        },
        transition: fastTransition,
      };

  return (
    <motion.div className="inline-block" {...motionProps}>
      {href && !disabled ? (
        <Link href={href} onClick={onClick} className={sharedClasses}>
          {content}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={sharedClasses}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
}