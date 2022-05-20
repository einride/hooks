import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

export const usePrefersColorScheme = (): "dark" | "light" => {
  return useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
}
