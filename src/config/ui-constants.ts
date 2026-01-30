/**
 * UI Constants
 * Documentation of standardized values used across the application.
 * 
 * Note: Tailwind CSS utility classes cannot directly consume these values
 * at runtime. These constants serve as:
 * 1. Documentation of design system values
 * 2. Reference for developers when using inline styles or dynamic calculations
 * 3. Single source of truth for hardcoded values in components
 * 
 * For Tailwind classes, these values should be manually kept in sync.
 */

// Header dimensions - used in Header.tsx for scroll calculations
export const HEADER_HEIGHT = 80; // px
export const HEADER_SCROLL_THRESHOLD = 80; // px

// Animation delays - used across multiple components for reveal animations
export const ANIMATION_DELAY_BASE = 80; // ms
export const ANIMATION_DELAY_STEP = 60; // ms

// Minimum touch target size (WCAG 2.1 Level AAA) - reference for min-h-[48px]
export const MIN_TOUCH_TARGET_SIZE = 48; // px

// Card background opacity - standardized at 70% (bg-card/70)
export const CARD_BG_OPACITY = 0.7; // 70%
