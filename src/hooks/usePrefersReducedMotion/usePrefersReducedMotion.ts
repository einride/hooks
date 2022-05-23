import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

/**
 * Subscribes to reduced motion preference changes and returns true if reduced motion is preferred and false if not.
 */
export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
