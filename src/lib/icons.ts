// src/lib/icons.ts

import {
  Download,
  ArrowRight,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

export const iconMap = {
  download: Download,
  arrowRight: ArrowRight,
  fileText: FileText,
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
  chevronDown: ChevronDown,
};

export type IconName = keyof typeof iconMap;