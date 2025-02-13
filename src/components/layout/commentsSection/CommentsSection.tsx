import styled from "styled-components"
import CommentsItem from "./CommentsItem"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  box-sizing: border-box;
`

const SectionTitle = styled.h4`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
`

export default function CommentsSection() {
  return (
    <Wrapper>
      <SectionTitle>
        Комментарии
      </SectionTitle>
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
    </Wrapper>
  )
}