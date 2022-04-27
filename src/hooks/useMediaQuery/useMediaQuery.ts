import { useEffect, useState } from "react"

/**
 * Subscribes to a media query and returns a boolean value indicating whether the media query matches.
 *
 * @param query The media query to match.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(getInitialValue(query))

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

const getInitialValue = (query: string): boolean => {
  if ("matchMedia" in window) {
    return window.matchMedia(query).matches
  }

  return false
}
