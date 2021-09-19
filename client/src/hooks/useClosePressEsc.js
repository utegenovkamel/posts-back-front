import { useEffect } from 'react'

const useClosePressEsc = (isOpen, onClose) => {
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (!isOpen || !onClose) return

      e.preventDefault()
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keyup', handleKeyUp, false)
    return () => window.removeEventListener('keyup', handleKeyUp, false)
  }, [isOpen, onClose])
}

export default useClosePressEsc
