import { Box, Flex } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import AddModal from './components/AddModal'

export interface Props {
  openModal: boolean
}
const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const showModal = useCallback(() => {
    console.log(openModal)
    setOpenModal(!openModal)
  }, [openModal])

  const today = new Date()
  const todayDay = today.getDay()
  const todayYear = today.getFullYear()
  const todayDate = today.getDate()

  const DAY = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  return (
    <Container>
      {openModal === false ? (
        <Contents>
          <DateStyle>
            <Flex alignItems={'center'}>
              <Box fontStyle={'OpenSans'} fontSize={'40px'}>
                {todayDate}
              </Box>
              <Flex direction={'column'} marginLeft={'10px'}>
                <Box fontStyle={'OpenSans'} fontSize={'15px'}>
                  {String(today).split(' ')[1]}
                </Box>
                <Box fontSize={'15px'}>{todayYear}</Box>
              </Flex>
            </Flex>
            <Box fontSize={'15px'}>{DAY[todayDay - 1]}</Box>
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
  justify-content: space-evenly;
  align-items: center;
  top: 20%;
  width: 39%;
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
