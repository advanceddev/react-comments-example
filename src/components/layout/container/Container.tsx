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
  padding: .5rem;
  margin: 0 auto;
  width: 95vw;
  
  @media(min-width: 768px) {
    width: 65vw;
  }
`;

export default function Container({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}