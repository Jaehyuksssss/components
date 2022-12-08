import React, { useState } from 'react'
import styled from 'styled-components'
import AddModal from './components/AddModal'

export interface Props {
  openModal: boolean
}
const Home = () => {
  const [openModal, setOpenModal] = useState<any>(false)

  const showModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <Container>
      <Contents>
        {openModal === false ? (
          <AddButton onClick={showModal}>+</AddButton>
        ) : (
          <AddButton onClick={closeModal}>-</AddButton>
        )}
        {openModal && <AddModal setOpenModal={setOpenModal} />}
      </Contents>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Contents = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 40%;
`
const AddButton = styled.div`
  width: 100px;
  height: 100px;
`
