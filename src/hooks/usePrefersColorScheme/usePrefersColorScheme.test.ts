import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useColorScheme } from "./usePrefersColorScheme"

describe("usePrefersColorScheme", () => {
  it("should return preferred color scheme", () => {
    const { result } = renderHook(() => useColorScheme())
    expect(result.current).toBe("dark")
  })
})

const MEDIA_QUERY_1 = "(prefers-color-scheme: dark)"

type Query = typeof MEDIA_QUERY_1

const mediaMatches = {
  [MEDIA_QUERY_1]: "dark",
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
