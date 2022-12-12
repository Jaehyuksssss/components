import React, { useState } from 'react'
import styled from 'styled-components'
import { Todo } from '../todo.model'
import NewTodo from './NewTodo'
import Todolist from './Todolist'
import { useDispatch } from 'react-redux'

const AddModal = ({ setOpenModal }: any) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const dispatch = useDispatch()

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ])
  }
  console.log(todos)
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  return (
    <ModalContainer>
      <InputBox>
        <NewTodo onAddTodo={todoAddHandler} />
      </InputBox>
      <div>
        <Todolist items={todos} onDeleteTodo={todoDeleteHandler} />
      </div>
      <button onClick={closeModal}>close</button>
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
