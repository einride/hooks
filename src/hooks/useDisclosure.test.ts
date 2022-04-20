import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useDisclosure } from "./useDisclosure"

describe("useDisclosure", () => {
  it("should be closed after running close", () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.isOpen).toBe(true)
    act(() => {
      result.current.handlers.close()
    })
    expect(result.current.isOpen).toBe(false)
  })

  it("should be open after running open", () => {
    const { result } = renderHook(() => useDisclosure(false))
    expect(result.current.isOpen).toBe(false)
    act(() => {
      result.current.handlers.open()
    })
    expect(result.current.isOpen).toBe(true)
  })

  it("should toggle after running toggle", () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.isOpen).toBe(true)
    act(() => {
      result.current.handlers.toggle()
    })
    expect(result.current.isOpen).toBe(false)
    act(() => {
      result.current.handlers.toggle()
    })
    expect(result.current.isOpen).toBe(true)
  })
})
