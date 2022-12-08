import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import AddModal from './components/AddModal'

export interface Props {
  openModal: boolean
}
const Home = () => {
  const [openModal, setOpenModal] = useState<any>(false)
  const [date, setDate] = useState(new Date())

  const showModal = () => {
    setOpenModal(true)
  }

  const today = new Date()
  const todayDay = today.getDay()
  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()
  const todayDate = today.getDate()
  console.log(todayMonth)

  return (
    <Container>
      {openModal === false ? (
        <Contents>
          <DateStyle>
            <Box fontSize={'50px'}>{todayDate}</Box>
            <Flex direction={'column'} marginLeft={'10px'}>
              <Box fontSize={'15px'}>{todayMonth + 1}</Box>
              <Box fontSize={'15px'}>{todayYear}</Box>
            </Flex>
          </DateStyle>

          <PlusBtn onClick={showModal} src="/img/button.png" alt="왜 안나옴" />
          {openModal && <AddModal setOpenModal={setOpenModal} />}
        </Contents>
      ) : (
        <AddSchedule>
          <AddModal setOpenModal={setOpenModal} />
        </AddSchedule>
      )}
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
const DateStyle = styled.div`
  position: absolute;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  top: 20%;
  right: 50%;
`

const Contents = styled.div`
  background: white;
  display: flex;
  height: 70%;
  width: 40%;
`
const PlusBtn = styled.img`
  width: 55px;
  position: absolute;
  top: 83%;
  right: 48%;
`
const AddSchedule = styled.div`
  background: white;
  display: flex;
  height: 70%;
  width: 40%;
  justify-content: center;
`
