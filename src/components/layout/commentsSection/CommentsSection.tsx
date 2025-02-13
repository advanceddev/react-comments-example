import styled from "styled-components"
import CommentsItem from "./CommentsItem"
import CreateCommentForm from "./CreateCommentForm"
import { wait } from "@/libs/wait"
import { Comment } from "@/types"
import { useState } from "react"
import { initialComments } from "@/mock"

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

  const [comments, setComments] = useState<Comment[]>(initialComments)

  const handleLeaveComment = async (payload: Comment) => {
    await wait(1000)
    setComments((prev) => [
      payload,
      ...prev
    ])
  }

  const items = comments.map((item) =>
    <CommentsItem key={item.id} data={item} />
  )

  return (
    <Wrapper>
      <SectionTitle>
        Комментарии
      </SectionTitle>
      <CreateCommentForm onSubmit={handleLeaveComment}/>
      {items}
    </Wrapper>
  )
}
