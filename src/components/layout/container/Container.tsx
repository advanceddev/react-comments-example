import { type ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 95vw;
  padding: .5rem;
  margin: 0 auto;
`;

export default function Container({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}