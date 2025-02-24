import type { Comment } from "@/types"
import { memo, useEffect, useState } from "react"
import styled from "styled-components"
import RatingControls from "./RatingControls"
import CommentHeaderInfo from "./CommentHeader"

type Props = {
  data: Comment
}

const Wrapper = styled.div<{ $folded?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: .5em;
  opacity: ${p => p.$folded ? '.5' : '1'};
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
  overflow: hidden;
`

const CommentBody = styled.span`
  font-size: 1em;
  font-weight: 500;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
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

  const [state, setState] = useState({
    rating: data.rating,
    folded: data.rating < -10,
    fullView: data.rating >= -10
  });

  useEffect(() => {
  if (state.rating < -10) {
    setState(prev => ({ ...prev, folded: true }));
  } else {
    setState(prev => ({ ...prev, folded: false, fullView: true }));
  }
}, [state.rating]);

  const updateRating = (change: number) => {
    setState(prev => ({ ...prev, rating: prev.rating + change }));
  };

  const handleIncrementRating = () => {
    updateRating(1)
  }

  const handleDecrementRating = () => {
    updateRating(-1)
  }

  return (
    <Wrapper $folded={state.rating < -10}>
      <Userpic src={data.userpic} alt={data.author} width={48} height={48} />
      <CommentWrapper>
        <CommentHeaderInfo author={data.author} date={data.created_at} />
        
        {state.fullView && (
          <CommentBody>
            {data.body}
          </CommentBody>
        )}
        
        <CommentFooter $folded={state.folded}>
          {state.folded && (
            <UnfoldButton onClick={() => {
              setState(prev => ({ ...prev, fullView: !prev.fullView }))
            }}>
              {state.fullView ? 'Скрыть комментарий' : 'Развернуть комментарий'}
            </UnfoldButton>
          )}

          <RatingControls 
            rating={state.rating} 
            onIncrement={handleIncrementRating} 
            onDecrement={handleDecrementRating} 
          />

        </CommentFooter>
      </CommentWrapper>
    </Wrapper>
  );
}

export default memo(CommentsItem)