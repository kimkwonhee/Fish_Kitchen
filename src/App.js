import React from 'react'
import styled from 'styled-components'
import _About_store from './pages/_About_store'
import _home from './pages/_Home'

const App = () => {
  return (
    <Wrapper>
      {/* <_home /> */}
      <_About_store />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

export default App;
