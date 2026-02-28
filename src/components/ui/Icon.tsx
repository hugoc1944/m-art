"use client";

import { iconMap, type IconName } from "@/lib/icons";

interface IconProps {
  icon: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

/**
 * Standardized Icon wrapper
 * Ensures consistent size + stroke across system
 * App Router safe (serializable props only)
 */
export default function Icon({
  icon,
  size = 16,
  strokeWidth = 1.5,
  className,
}: IconProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) return null;

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}