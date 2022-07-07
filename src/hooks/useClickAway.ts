import { RefObject, useEffect } from 'react'

const useClickAway = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[] | null,
  onClickAway?: () => void
) => {
  useEffect(() => {
    const handleClickAway: EventListener = (event) => {
      if (onClickAway) {
        const eventInEl = (Array.isArray(ref) ? ref : [ref]).some(
          (r) => r && r.current && r.current.contains(event.target as Node)
        )
        if (!eventInEl) {
          onClickAway()
        }
      }
    }

    if (onClickAway) {
      document.addEventListener('mousedown', handleClickAway)
      document.addEventListener('touchstart', handleClickAway)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickAway)
      document.removeEventListener('touchstart', handleClickAway)
    }
  }, [onClickAway, ref])
}

export default useClickAway