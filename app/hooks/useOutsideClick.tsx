import { RefObject, useEffect, useRef } from 'react'

// TODO: Fix type errors
function useOutsideClick(callback: () => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: RefObject<any> = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // check if clicked element is outside the referenced component
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback])

  return ref
}

export default useOutsideClick
