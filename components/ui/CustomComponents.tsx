"use client";
import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-full overflow-hidden";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5",
    accent:
      "bg-[#F59E0B] text-[#0F0A1E] hover:bg-[#D97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
};

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 mb-6"
  >
    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
    {children}
  </motion.div>
);

export const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: 0.1 }}
    className={`font-clash text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-6 ${className}`}
  >
    {children}
  </motion.h2>
);
