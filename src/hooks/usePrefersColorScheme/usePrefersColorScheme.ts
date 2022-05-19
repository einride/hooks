import { useMediaQuery } from "../useMediaQuery/useMediaQuery"

export const useColorScheme = (): "dark" | "light" => {
  return useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light"
}
