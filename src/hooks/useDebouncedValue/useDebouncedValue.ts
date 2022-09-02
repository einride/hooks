import { useEffect, useState } from "react"

/**
 * Debounces value changes, which can be useful when performing expensive operations on state change. An example is when you want to send a network request on state change.
 *
 * @param value The value to debounce.
 * @param delay The delay time in ms the value should be debounced.
 */
export const useDebouncedValue = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay ?? 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
