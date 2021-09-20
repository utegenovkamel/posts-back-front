import React from 'react'
import { Loader } from 'components'
import { Overlay } from './styles'

const FullPageLoading = ({ loading }) => (
  <Overlay loading={loading}>
    <Loader center />
  </Overlay>
)

export default FullPageLoading
