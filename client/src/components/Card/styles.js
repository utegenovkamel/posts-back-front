import styled from 'styled-components';
import theme from 'theme';

export const Styled = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${theme.grey};
  padding: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  > div {
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;
  }
`;
