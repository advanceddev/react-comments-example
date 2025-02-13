import { Comment } from '@/types'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { memo, useCallback, useRef, useState } from "react"
import styled from "styled-components"

type Props = {
  onSubmit: (payload: Comment) => Promise<void>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Textarea = styled.textarea`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 500;
  width: 100%;
  max-width: 100%;
  height: 180px;
  border: none;
  background: #eee5;
  padding: 1em;
  border-radius: 1em;
  resize: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  outline: none;
  box-sizing: border-box;
`

const Tip = styled.span`
  font-size: 12px;
  color: #aaa;
  font-weight: 600;
  text-align: right;
  display: none;
  @media(min-width: 768px) {
    display: block;
  }
`

function CreateCommentForm({ onSubmit }:Props) {

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState('')

  const handleSubmit = useCallback(() => {
    if (value.length === 0) return
    textAreaRef.current?.blur()

    const payload = {
      id: Math.random(),
      created_at: new Date(),
      postId: 1,
      author: 'John Doe',
      userpic: 'https://avatar.iran.liara.run/public',
      body: value.trim(),
      rating: 0
    }

    onSubmit(payload).then(() => {
      setValue('')
    })
  }, [onSubmit, value])

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {         
      handleSubmit()
    }
  }

  return (
    <Wrapper>
      <Textarea
        ref={textAreaRef}
        placeholder="Оставьте комментарий..."
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        value={value}
      />
      <button onClick={handleSubmit} disabled={value.length === 0}>
        Оставить комментарий
      </button>
      <Tip>SHIFT + ENTER для отправки</Tip>
    </Wrapper>
  )
}

export default memo(CreateCommentForm)