import Home from './Home'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <Home />
      </Container>
    </Provider>
  )
}

export default App
const Container = styled.div`
  background: #eaeaea;
`
