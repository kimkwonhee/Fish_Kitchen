import React from 'react'
import styled from 'styled-components'
import Menubar from './components/organism/Menubar'
import _About_company from './pages/_About_company'
import _About_history from './pages/_About_history'
import _About_store from './pages/_About_store'
import _About_vision from './pages/_About_vision'
import _home from './pages/_Home'

const App = () => {
  return (
    <Wrapper>
      <Menubar name="home"/>
      {/* <_home /> */}
      {/* <_About_store /> */}
      {/* <_About_vision /> */}
      {/* <_About_company /> */}
      <_About_history />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

export default App;
