import React from 'react'
import { useClosePressEsc } from 'hooks'
import Icon from 'components/Icon'
import Header from './Header'
import { Content, Overlay } from './styles'

const Modal = ({ isOpen, onClose, children }) => {
  useClosePressEsc(isOpen, onClose)

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <Content
        className="modal-content"
        isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <Icon type="cross" onClick={onClose} />
        {children}
      </Content>
    </Overlay>
  )
}

Modal.Header = Header

export default Modal
