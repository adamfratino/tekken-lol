import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges and combines class names using `clsx` and `twMerge`.
 *
 * @param {...ClassValue[]} inputs - The class names to combine.
 * @returns {string} The combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
