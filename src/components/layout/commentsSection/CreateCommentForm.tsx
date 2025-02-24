import type { Comment } from '@/types'
import type { ChangeEvent, FormEvent } from 'react'
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
  padding: 1em;
  border-radius: 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  @media (prefers-color-scheme: light) {
    background: #eee5;
  }
`

const Textarea = styled.textarea`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  font-weight: 500;
  width: 100%;
  max-width: 100%;
  height: 180px;
  border: none;
  padding: 1em;
  border-radius: 1em;
  resize: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  outline: none;
  box-sizing: border-box;
  @media (prefers-color-scheme: light) {
    background: #eee5;
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
      userpic: 'https://dummyjson.com/icon/65535/150',
      body: state.body.trim(),
      rating: 0
    }

    void onSubmit(payload).then(() => {
      resetForm()
    }).finally(() => {
      setIsPending(false)
    })
  }, [state.body, state.name, state.email, isPending, onSubmit, resetForm])

  const handleFieldChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
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
        value={state.body}
        name="body"
        required
      />

      <button type='submit' disabled={isPending}>
        {isPending ? '...' : 'Оставить комментарий'}
      </button>
    </Wrapper>
  )
}

export default memo(CreateCommentForm)