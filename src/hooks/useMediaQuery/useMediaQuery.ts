import { useState, useEffect } from "react"

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    if ("matchMedia" in window) {
      setMatches(window.matchMedia(query).matches)

      window
        .matchMedia(query)
        .addEventListener("change", (event) => setMatches(event.matches))

      return () =>
        window
          .matchMedia(query)
          .removeEventListener("change", (event) => setMatches(event.matches))
    }

    return undefined
  }, [query])

  return matches
}
