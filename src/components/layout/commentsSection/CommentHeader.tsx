import styled from "styled-components";

type Props = {
  author: string;
  date: Date;
}

const CommentHeader= styled.div`
  display: flex;
  flex-direction: column;
  gap: .25em;
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

export default function CommentHeaderInfo({ author, date }: Props) {
  return (
    <CommentHeader>
      <AuthorName>{author}</AuthorName>
      <CreatedDateTime>{date.toLocaleDateString()}</CreatedDateTime>
    </CommentHeader>
  )
};