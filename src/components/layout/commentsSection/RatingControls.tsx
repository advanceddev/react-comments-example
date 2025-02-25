import styled from "styled-components";

type Props = {
  rating: number;
  onIncrement: (change: number) => void;
  onDecrement: (change: number) => void;
}

const CommentRatingSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  background: #eee2;
  padding: 4px 18px;
  border-radius: 24px;
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

export default function RatingControls({ rating, onIncrement, onDecrement }: Props){
  return (
    <CommentRatingSection>
      <CurrentRating>{rating}</CurrentRating>
      <IncrementButton onClick={() => {
        onIncrement(1)
      }}>+</IncrementButton>
      <DecrementButton onClick={() => {
        onDecrement(-1)
      }}>-</DecrementButton>
    </CommentRatingSection>
  );
};