import styled from "styled-components";
import SlIconButton from '@shoelace-style/shoelace/dist/react/icon-button/index.js';

type Props = {
  rating: number;
  onIncrement: (change: number) => void;
  onDecrement: (change: number) => void;
}

const CommentRatingSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  min-width: 120px;
`

const CurrentRating = styled.span`
  font-weight: 800;
  font-size: 1em;
`

export default function RatingControls({ rating, onIncrement, onDecrement }: Props){
  return (
    <CommentRatingSection>
      <SlIconButton style={{ color: 'green' }} name="caret-up-fill" label="Лайк" onClick={() => {
        onIncrement(1)
      }}/>
      <CurrentRating>{rating}</CurrentRating>
      <SlIconButton style={{ color: 'red' }} name="caret-down-fill" label="Дизлайк" onClick={() => {
        onDecrement(-1)
      }}/>
    </CommentRatingSection>
  );
};