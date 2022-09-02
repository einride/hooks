import { renderHook } from "@testing-library/react"
import { describe, expect, vi } from "vitest"
import { useDebouncedValue } from "./useDebouncedValue"

describe("useDebouncedValued", () => {
  it("should return debounced value", () => {
    const value = "value"
    const { result } = renderHook(() => useDebouncedValue(value))
    expect(result.current).toEqual(value)
  })

  it("should debounce with default delay 500 ms", () => {
    vi.spyOn(window, "setTimeout")
    renderHook(() => useDebouncedValue("value"))
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })

  it("should debounce with given delay", () => {
    vi.spyOn(window, "setTimeout")
    const delay = 1337
    renderHook(() => useDebouncedValue("value", delay))
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay)
  })

  it("should call clearTimeout on unmount", () => {
    vi.spyOn(window, "clearTimeout")
    const { unmount } = renderHook(() => useDebouncedValue("value"))
    unmount()
    expect(clearTimeout).toHaveBeenCalledTimes(1)
  })
})
