import React from 'react'
import { Modal, Button } from 'components'
import { connector } from 'helpers'
import { Buttons } from './styles'

const DeleteModal = ({ isOpen, onClose, id, title }) => {
  const handleConfirm = async () => {
    const { status } = await connector.delete(`app/post/${id}`)
    console.log('status', status)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Delete this ${title} post?</Modal.Header>
      <Buttons>
        <Button color="grey" onClick={onClose}>
          No
        </Button>
        <Button color="green" onClick={handleConfirm}>
          Yes
        </Button>
      </Buttons>
    </Modal>
  )
}

export default DeleteModal
