import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useMediaQuery } from "./useMediaQuery"

describe("useMediaQuery", () => {
  it("should return true if media query matches", () => {
    const { result } = renderHook(() => useMediaQuery(MEDIA_QUERY_1))
    expect(result.current).toBe(true)
  })

  it("should return false if media query does not match", () => {
    const { result } = renderHook(() => useMediaQuery(MEDIA_QUERY_2))
    expect(result.current).toBe(false)
  })
})

const MEDIA_QUERY_1 = "(min-width: 500px)"
const MEDIA_QUERY_2 = "(min-width: 1000px)"

type Query = typeof MEDIA_QUERY_1 | typeof MEDIA_QUERY_2

const mediaMatches = {
  [MEDIA_QUERY_1]: true,
  [MEDIA_QUERY_2]: false,
}

const matchMedia = vi.fn((query: Query) => ({
  matches: mediaMatches[query],
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))

vi.stubGlobal("matchMedia", matchMedia)
