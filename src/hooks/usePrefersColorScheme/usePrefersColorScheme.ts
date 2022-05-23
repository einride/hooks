import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

/**
 * Subscribes to color scheme preference changes and returns dark if dark scheme is preferred and light if light scheme is preferred.
 */
export const usePrefersColorScheme = (): "dark" | "light" => {
  return useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
}
