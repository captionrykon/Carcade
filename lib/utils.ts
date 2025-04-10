import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimAddress(address: string) {
  if (!address) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
