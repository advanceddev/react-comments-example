import type { Comment } from '@/types'
import type { ChangeEvent, FormEvent, KeyboardEvent } from 'react'
import { memo, useCallback, useRef, useState } from "react"
import styled from "styled-components"

type Props = {
  onSubmit: (payload: Comment) => Promise<void>
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const FieldSet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  gap: 1em;
`

const InputField = styled.input`
  border: none;
  background: #eee5;
  padding: 1em;
  border-radius: 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
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

const INITIAL_STATE = { name: '', email: '', body: '' }

function CreateCommentForm({ onSubmit }:Props) {

  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [isPending, setIsPending] = useState(false)

  const [state, setState] = useState(INITIAL_STATE)

  const resetForm = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  const handleSubmit = useCallback((e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (isPending) return
    setIsPending(true)
    textAreaRef.current?.blur()

    const payload = {
      id: Math.random(),
      created_at: new Date(),
      postId: 1,
      author: state.name.trim(),
      email: state.email.trim(),
      userpic: 'https://avatar.iran.liara.run/public',
      body: state.body.trim(),
      rating: 0
    }

    onSubmit(payload).then(() => {
      resetForm()
    }).finally(() => {
      setIsPending(false)
    })
  }, [state.body, state.name, state.email, isPending, onSubmit, resetForm])

  const handleFieldChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {         
      handleSubmit()
    }
  }

  return (
    <Wrapper action="" method="" onSubmit={handleSubmit}>
      <FieldSet>
        <InputField
          value={state.name}
          onChange={handleFieldChange}
          type="text"
          name="name"
          placeholder='Введите имя'
          required
        />
        <InputField
          value={state.email}
          onChange={handleFieldChange}
          type="email"
          name="email"
          placeholder='Введите E-mail'
          required
        />
      </FieldSet>

      <Textarea
        ref={textAreaRef}
        placeholder="Оставьте комментарий..."
        onChange={handleFieldChange}
        onKeyUp={handleKeyPress}
        value={state.body}
        name="body"
        required
      />

      <button type='submit' disabled={isPending}>
        {isPending ? '...' : 'Оставить комментарий'}
      </button>
      
      <Tip>SHIFT + ENTER для отправки</Tip>
    </Wrapper>
  )
}

export default memo(CreateCommentForm)