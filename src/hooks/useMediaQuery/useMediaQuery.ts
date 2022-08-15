import { useCallback, useEffect, useState } from "react"

/**
 * Subscribes to a media query and returns a boolean value indicating whether the media query matches.
 *
 * @param query The media query to match.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(getInitialValue(query))
  const onMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }, [])

  useEffect(() => {
    if (typeof window?.matchMedia === "function") {
      const mediaQueryList = window.matchMedia(query)

      setMatches(mediaQueryList.matches)

      mediaQueryList.addEventListener("change", onMediaQueryChange)

      return () => mediaQueryList.removeEventListener("change", onMediaQueryChange)
    }

    return undefined
  }, [query, onMediaQueryChange])

  return matches
}

const getInitialValue = (query: string): boolean => {
  if (typeof window !== "undefined" && typeof window?.matchMedia === "function") {
    return window.matchMedia(query).matches
  }

  return false
}
