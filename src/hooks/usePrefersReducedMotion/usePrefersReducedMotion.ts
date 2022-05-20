import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
