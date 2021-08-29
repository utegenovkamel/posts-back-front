import React from 'react';
import { Content, ModalContainer } from './styles';
import { useClosePressEsc } from 'hooks';

export const Modal = ({ isOpen, onClose, children }) => {
  useClosePressEsc(isOpen, onClose);
  return (
    <ModalContainer isOpen={isOpen} onClick={() => onClose()}>
      <Content isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </ModalContainer>
  );
};
