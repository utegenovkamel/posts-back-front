import { useState } from 'react'

const useModal = ({ setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (selectedItem) => {
    setSelectedItem(selectedItem)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return [isOpen, openModal, closeModal]
}

export default useModal
