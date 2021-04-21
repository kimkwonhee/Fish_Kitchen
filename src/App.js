import React from 'react'
import styled from 'styled-components'
import _home from './pages/_Home'

const App = () => {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

const HomePage = styled(_home)`
  position : absolute;
  top : 0;
`



export default App;
