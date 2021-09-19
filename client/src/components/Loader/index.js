import React from 'react'
import { LoaderWrapper, SpinnerImg } from './styles'

const Loader = ({ center, absolute = false, top, bottom, left, right }) => {
  return (
    <LoaderWrapper
      center={center}
      absolute={absolute}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <SpinnerImg />
    </LoaderWrapper>
  )
}

export default Loader
