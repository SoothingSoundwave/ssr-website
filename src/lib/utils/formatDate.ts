// formatDate.ts
// Path: /src/lib/utils/formatDate.ts

import { format, formatDistanceToNow, parseISO } from 'date-fns'

/**
 * Format a date to a readable string
 * @param date - Date string or Date object
 * @param formatString - Format string (default: 'MMM dd, yyyy')
 * @returns Formatted date string
 * 
 * @example
 * formatDate('2025-01-15') // Returns: 'Jan 15, 2025'
 */
export function formatDate(date: string | Date, formatString: string = 'MMM dd, yyyy'): string {
  const dateObject = typeof date === 'string' ? parseISO(date) : date
  return format(dateObject, formatString)
}

/**
 * Format a date to show relative time (e.g., "2 days ago")
 * @param date - Date string or Date object
 * @returns Relative time string
 * 
 * @example
 * formatRelativeTime('2025-01-15') // Returns: '2 days ago'
 */
export function formatRelativeTime(date: string | Date): string {
  const dateObject = typeof date === 'string' ? parseISO(date) : date
  return formatDistanceToNow(dateObject, { addSuffix: true })
}

/**
 * Format a date for display in admin dashboard
 * @param date - Date string or Date object
 * @returns Formatted date and time string
 * 
 * @example
 * formatDateTime('2025-01-15T14:30:00') // Returns: 'Jan 15, 2025 at 2:30 PM'
 */
export function formatDateTime(date: string | Date): string {
  const dateObject = typeof date === 'string' ? parseISO(date) : date
  return format(dateObject, 'MMM dd, yyyy \'at\' h:mm a')
}

/**
 * Format duration in seconds to MM:SS format
 * @param seconds - Duration in seconds
 * @returns Formatted duration string
 * 
 * @example
 * formatDuration(185) // Returns: '3:05'
 */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}