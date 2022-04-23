import { useState, useEffect } from "react"

export const useMediaQuery = (
  query: string,
  initialValue?: boolean,
): boolean => {
  const [matches, setMatches] = useState(getInitialValue(query, initialValue))

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

const getInitialValue = (query: string, initialValue?: boolean): boolean => {
  if (initialValue !== undefined) {
    return initialValue
  }

  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches
  }

  return false
}
