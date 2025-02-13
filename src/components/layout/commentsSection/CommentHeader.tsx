import { useMemo } from "react";
import styled from "styled-components";
import { formatDistance } from 'date-fns'
import { ru } from "date-fns/locale";

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


  const formatedDate = useMemo(() => {
    return formatDistance(date, new Date(), { addSuffix: true, locale: ru })
  }, [date])


  return (
    <CommentHeader>
      <AuthorName>{author}</AuthorName>
      <CreatedDateTime>{formatedDate}</CreatedDateTime>
    </CommentHeader>
  )
};