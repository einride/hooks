import { act, renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useDisclosure } from "./useDisclosure"

describe("useDisclosure", () => {
  it("handles close correctly", () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.isOpen).toBe(true)
    act(() => result.current.handlers.close())
    expect(result.current.isOpen).toBe(false)
  })

  it("handles open correctly", () => {
    const { result } = renderHook(() => useDisclosure(false))
    expect(result.current.isOpen).toBe(false)
    act(() => result.current.handlers.open())
    expect(result.current.isOpen).toBe(true)
  })

  it("handles toggle correctly", () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.isOpen).toBe(true)
    act(() => result.current.handlers.toggle())
    expect(result.current.isOpen).toBe(false)
    act(() => result.current.handlers.toggle())
    expect(result.current.isOpen).toBe(true)
  })

  it("calls onOpen when open is called", () => {
    const onOpen = vi.fn()
    const { result } = renderHook(() => useDisclosure(false, { onOpen }))
    expect(onOpen).toHaveBeenCalledTimes(0)
    act(() => result.current.handlers.open())
    expect(onOpen).toHaveBeenCalledTimes(1)
    act(() => result.current.handlers.open())
    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when open is called", () => {
    const onClose = vi.fn()
    const { result } = renderHook(() => useDisclosure(true, { onClose }))
    expect(onClose).toHaveBeenCalledTimes(0)
    act(() => result.current.handlers.close())
    expect(onClose).toHaveBeenCalledTimes(1)
    act(() => result.current.handlers.close())
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("calls correct handlers when toggle is called", () => {
    const onOpen = vi.fn()
    const onClose = vi.fn()
    const { result } = renderHook(() =>
      useDisclosure(true, { onOpen, onClose }),
    )
    expect(onOpen).toHaveBeenCalledTimes(0)
    expect(onClose).toHaveBeenCalledTimes(0)
    act(() => result.current.handlers.toggle())
    expect(onOpen).toHaveBeenCalledTimes(0)
    expect(onClose).toHaveBeenCalledTimes(1)
    act(() => result.current.handlers.toggle())
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
