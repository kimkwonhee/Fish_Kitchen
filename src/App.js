import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Menubar from './components/organism/Menubar'
import _About_company from './pages/_About_company'
import _About_history from './pages/_About_history'
import _About_store from './pages/_About_store'
import _About_vision from './pages/_About_vision'
import _home from './pages/_Home'
import _Inquiry from './pages/_Inquiry'
import _Product from './pages/_Product'
import { Route, Switch } from 'react-router-dom'


const Globalstyles = createGlobalStyle`

    html, body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size : 16px;
    }
`

const App = () => {
  return (
    <Wrapper>
      <Globalstyles />
      <Menubar />
      <Switch>
        <Route path="/home" component={_home} exact/>
        <Route path="/about_store" component={_About_store}/>
        <Route path="/about_vision" component={_About_vision}/>
        <Route path="/about_company" component={_About_company}/>
        <Route path="/about_history" component={_About_history}/>
        <Route path="/product" component={_Product}/>
        <Route path="/inquiry" component={_Inquiry}/>
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
`

export default App;
