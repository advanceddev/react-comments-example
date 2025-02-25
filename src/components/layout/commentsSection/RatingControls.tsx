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
  justify-content: space-between;
  gap: 15px;
  min-width: 120px;
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
      <IncrementButton onClick={() => {
        onIncrement(1)
      }}>▲</IncrementButton>
      <CurrentRating>{rating}</CurrentRating>
      <DecrementButton onClick={() => {
        onDecrement(-1)
      }}>▼</DecrementButton>
    </CommentRatingSection>
  );
};