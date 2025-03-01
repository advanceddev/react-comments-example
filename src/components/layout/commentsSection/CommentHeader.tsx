import { useMemo } from "react";
import styled from "styled-components";
import { formatDistance } from 'date-fns'
import { ru } from "date-fns/locale";

type Props = {
  author: string;
  date: Date;
}

const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .25em;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Interpunct = styled.span`
  font-weight: 800;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const AuthorName = styled.span`
  font-size: 1em;
  font-weight: 700;
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
      <Interpunct>
        {' · '}
      </Interpunct>
      <CreatedDateTime>{formatedDate}</CreatedDateTime>
    </CommentHeader>
  )
};