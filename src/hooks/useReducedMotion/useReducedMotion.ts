import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

export const useReducedMotion = (): boolean => {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
