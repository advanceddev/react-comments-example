import styled, { keyframes } from "styled-components"

const flashing = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: .5em;
  animation: 1s ${flashing} ease-in-out infinite;
`

const Userpic = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 64px;
  background: #ccc5;
`

const Body = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 1em;
  background: #ccc5;
`

export default function CommentSkeleton() {
  return (
    <Wrapper>
      <Userpic />
      <Body />
    </Wrapper>
  )
}