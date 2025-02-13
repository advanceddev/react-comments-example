import { Comment } from "@/types"
import { memo, useCallback, useState } from "react"
import styled from "styled-components"

type Props = {
  data: Comment
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: .5em;
`

const Userpic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 64px;
  border: 1px solid #ccce;
`

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75em;
  justify-content: center;
`

const CommentHeader= styled.div`
  display: flex;
  flex-direction: column;
  gap: .25em;
`

const CommentBody = styled.span`
  font-size: 1em;
  font-weight: 500;
  color: #333;
  white-space: break-spaces;
`

const AuthorName = styled.span`
  font-size: 1em;
  font-weight: 700;
  color: #333;
`

const CreatedDateTime = styled.span`
  font-size: .85em;
  font-weight: 500;
  color: #777;
`

const CommentRatingSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`

const CurrentRating = styled.span`
  font-weight: 800;
  font-size: 1em;
`

const Button = styled.button`
  font-weight: 800;
  font-size: 1.5em;
  padding: .25em;
  background: transparent;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.5;
  }
`

const IncrementButton = styled(Button)`
  color: green;
`

const DecrementButton = styled(Button)`
  color: red;
`

function CommentsItem({ data }: Props) {

  const [rating, setRating] = useState(data.rating)

  const handleIncrementRating = useCallback(() => {
    setRating((prev) => prev + 1)
  }, [])

  const handleDecrementRating = useCallback(() => {
    setRating((prev) => prev -1)
  }, [])

  return (
    <Wrapper>
      <Userpic src={data.userpic} alt="" width={48} height={48} />
      <CommentWrapper>
        <CommentHeader>
          <AuthorName>{data.author}</AuthorName>
          <CreatedDateTime>{data.created_at.toDateString()}</CreatedDateTime>
        </CommentHeader>
        <CommentBody>
          {data.body}
        </CommentBody>
        <CommentRatingSection>
          <CurrentRating>{rating}</CurrentRating>
          <IncrementButton onClick={handleIncrementRating}>+</IncrementButton>
          <DecrementButton onClick={handleDecrementRating}>-</DecrementButton>
        </CommentRatingSection>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(CommentsItem)