// cn.ts
// Path: /src/lib/utils/cn.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal className handling
 * 
 * @example
 * cn('px-2 py-1', 'bg-red', { 'bg-blue': isBlue })
 * // Returns: 'px-2 py-1 bg-blue' (if isBlue is true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}