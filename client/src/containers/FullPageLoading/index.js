import React from 'react';
import { Overlay } from './styles';
import Loader from 'components/Loader';

const FullPageLoading = ({ isLoading }) => {
  return (
    <Overlay isLoading={isLoading}>
      <Loader center />
    </Overlay>
  );
};

export default FullPageLoading;
