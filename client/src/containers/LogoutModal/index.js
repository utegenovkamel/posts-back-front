import React from 'react'
import { Modal, Button } from 'components'
import { useHistory } from 'react-router'
import { removeToken } from 'helpers'
import { Buttons } from './styles'

const LogoutModal = ({ isOpen, onClose }) => {
  const history = useHistory()
  const logout = () => {
    removeToken()
    history.push('login')
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Do you want to logout?</Modal.Header>
      <Buttons>
        <Button color="grey" onClick={onClose}>
          No
        </Button>
        <Button color="green" onClick={logout}>
          Yes
        </Button>
      </Buttons>
    </Modal>
  )
}

export default LogoutModal
