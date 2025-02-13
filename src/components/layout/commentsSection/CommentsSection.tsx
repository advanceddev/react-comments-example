import styled from "styled-components"
import CommentsItem from "./CommentsItem"
import CreateCommentForm from "./CreateCommentForm"
import { wait } from "../../../libs/wait"

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

  const handleLeaveComment = async (payload: string) => {
    await wait(1000)
    console.log(payload)
  }

  return (
    <Wrapper>
      <SectionTitle>
        Комментарии
      </SectionTitle>
      <CreateCommentForm onSubmit={handleLeaveComment}/>
      <CommentsItem />
      <CommentsItem />
      <CommentsItem />
    </Wrapper>
  )
}
