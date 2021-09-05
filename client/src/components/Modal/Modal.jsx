import React from 'react';
import { Content, Overlay } from './styles';
import { useClosePressEsc } from 'hooks';
import { Icon } from 'components/Icon';

export const Modal = ({ isOpen, onClose, children }) => {
  useClosePressEsc(isOpen, onClose);

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
  );
};
