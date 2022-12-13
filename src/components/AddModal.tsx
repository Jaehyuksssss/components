import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'

interface TodosProps {
  todos: boolean
  onClickModal: () => void
}
const AddModal = ({ onClickModal }: TodosProps) => {
  const [todos, setTodos] = useState<string>('')
  const [text, setText] = useState<string>('')
  console.log(todos)

  const submitTodo = () => {
    setTodos(text)
    setText('')
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <ModalContainer>
      <InputBox>
        <div>
          <input
            className="input"
            placeholder="입력"
            value={text}
            onChange={textHandler}
            ref={inputRef}
          />
          <button className="submit" onClick={submitTodo}>
            submit
          </button>
          <div>{todos}</div>
        </div>
      </InputBox>
      <ClsoeButton onClick={onClickModal}>close</ClsoeButton>
    </ModalContainer>
  )
}

export default AddModal

const ModalContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputBox = styled.div`
  display: flex;
`
const ClsoeButton = styled.button`
  position: absolute;
  top: 18%;
  left: 65%;
`
