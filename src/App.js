import React from 'react'
import styled from 'styled-components'
import Menubar from './components/organism/Menubar'
import _About_company from './pages/_About_company'
import _About_history from './pages/_About_history'
import _About_store from './pages/_About_store'
import _About_vision from './pages/_About_vision'
import _home from './pages/_Home'
import _Inquiry from './pages/_Inquiry'
import _Product from './pages/_Product'
import { Route } from 'react-router-dom'
 
const App = () => {
  return (
    <Wrapper>
      <Nav />
      <Route path="/" component={_home} exact/>
      <Route path="/store" component={_About_store}/>      
      <Route path="/vision" component={_About_vision}/>
      <Route path="/company" component={_About_company}/>
      <Route path="/history" component={_About_history}/>
      <Route path="/product" component={_Product}/>
      <Route path="/inquiry" component={_Inquiry}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`
const Nav = styled(Menubar)`
 
`

export default App;
