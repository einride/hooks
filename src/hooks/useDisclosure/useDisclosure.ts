import { useState } from "react"

/**
 * Manages boolean state. It provides open, close and toggle handlers and accepts optional onOpen and onClose callbacks. It can be used to manage controlled modals, popovers and other similar components.
 * @param initialState Controls whether the component's initial state is open or closed.
 * @param callbacks Contains onOpen and onClose callbacks that are called when the open or close handlers are called.
 */
export const useDisclosure = (
  initialState: boolean,
  callbacks?: { onOpen?: () => void; onClose?: () => void },
): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = (): void => {
    if (!isOpen) {
      setIsOpen(true)
      callbacks?.onOpen?.()
    }
  }

  const close = (): void => {
    if (isOpen) {
      setIsOpen(false)
      callbacks?.onClose?.()
    }
  }

  const toggle = (): void => {
    if (isOpen) close()
    else open()
  }

  return { isOpen, handlers: { open, close, toggle } }
}

interface UseDisclosureReturn {
  isOpen: boolean
  handlers: UseDisclosureHandlers
}

export interface UseDisclosureHandlers {
  open: () => void
  close: () => void
  toggle: () => void
}
