import styled, { css } from 'styled-components'
import { ReactComponent as Spinner } from 'assets/img/spinner.svg'

export const LoaderWrapper = styled.div`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};

  top: ${({ top }) => top || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};

  ${({ center }) =>
    center &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`

export const SpinnerImg = styled(Spinner)`
  animation: loader 1.1s infinite linear;
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
