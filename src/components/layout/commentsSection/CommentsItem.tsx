import type { Comment } from "@/types"
import { memo, useEffect, useState, useMemo, useCallback } from "react"
import styled from "styled-components"
import RatingControls from "./RatingControls"
import CommentHeaderInfo from "./CommentHeader"

type Props = {
  data: Comment
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 0.5em;
  padding: 1em;
  border-radius: 24px;
  border: 1px solid transparent;
  @media screen and (min-width: 768px) {
    &:hover {
      border-color: #aaa5;
    }
  }
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
  gap: 0.75em;
  justify-content: center;
  overflow: hidden;
`

const CommentBody = styled.span<{ $folded?: boolean }>`
  font-size: 1em;
  font-weight: 500;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${p => p.$folded ? 0.65 : 1};
  @media (prefers-color-scheme: light) {
    color: #333;
  }
`

const CommentFooter = styled.div<{ $folded?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.$folded ? 'space-between' : 'flex-end'};
`

const UnfoldButton = styled.button`
  background: transparent;
  padding: 0;
  outline: none;
  border-bottom: 2px dashed #777;
  line-height: 1.5;
  height: max-content;
  border-radius: 0;
  color: #777;
  font-size: 12px;
`

function CommentsItem({ data }: Props) {
  const [rating, setRating] = useState(data.rating)
  const [fullView, setFullView] = useState(rating >= -10)
  const [folded, setFolded] = useState(rating < -10)

  useEffect(() => {
    if (rating < -10) {
      setFolded(true)
      setFullView(false)
    } else {
      setFolded(false)
      setFullView(true)
    }
  }, [rating])

  const updateRating = useCallback((change: number) => {
    setRating(prevRating => prevRating + change)
  }, [])

  const toggleFullView = useCallback(() => {
    setFullView(prevFullView => !prevFullView)
  }, [])

  const buttonText = useMemo(() => {
    return fullView ? 'Скрыть комментарий' : 'Показать комментарий'
  }, [fullView])

  return (
    <Wrapper>
      <Userpic src={data.userpic} alt={data.author} width={48} height={48} />
      <CommentWrapper>
        <CommentHeaderInfo author={data.author} date={data.created_at} />

        {fullView && (
          <CommentBody $folded={folded}>
            {data.body}
          </CommentBody>
        )}

        <CommentFooter $folded={folded}>
          {folded && (
            <UnfoldButton onClick={toggleFullView}>
              {buttonText}
            </UnfoldButton>
          )}
          <RatingControls
            rating={rating}
            onIncrement={updateRating}
            onDecrement={updateRating}
          />
        </CommentFooter>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(CommentsItem)