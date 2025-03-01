import type { Comment } from '@/types'

import SlButton from '@shoelace-style/shoelace/dist/react/button/index.js';
import SlTextarea, { type SlChangeEvent } from '@shoelace-style/shoelace/dist/react/textarea/index.js';

import SlInput from '@shoelace-style/shoelace/dist/react/input/index.js';
import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input.d.ts';

import type { FormEvent } from 'react'
import { memo, useCallback, useState } from "react"
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

const INITIAL_STATE = { name: '', email: '', body: '' }

function CreateCommentForm({ onSubmit }:Props) {

  const [isPending, setIsPending] = useState(false)

  const [state, setState] = useState(INITIAL_STATE)

  const resetForm = useCallback(() => {
    setState(INITIAL_STATE)
  }, [])

  const handleSubmit = useCallback((e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (isPending) return
    setIsPending(true)

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

  const handleFieldChange = useCallback((e: SlChangeEvent) => {
    setState({ ...state, [(e.target as SlInputElement).name]: (e.target as SlInputElement).value })
  }, [state])

  return (
    <Wrapper action="" method="" onSubmit={handleSubmit}>
      <FieldSet>
        <SlInput
          value={state.name}
          onSlChange={handleFieldChange}
          type="text"
          name="name"
          placeholder='Введите имя'
          required
        />
        <SlInput
          value={state.email}
          onSlChange={handleFieldChange}
          type="email"
          name="email"
          placeholder='Введите E-mail'
          required
        />
      </FieldSet>

      <SlTextarea
        resize="none"
        placeholder='Оставьте комментарий...'
        value={state.body}
        onSlChange={handleFieldChange}
        name='body'
        required
      />

      <SlButton
        type='submit'
        variant='primary'
        disabled={isPending}
        loading={isPending}
        size='large'
      >
        Оставить комментарий
      </SlButton>
    </Wrapper>
  )
}

export default memo(CreateCommentForm)