import React from 'react'
import styled from 'styled-components'
import Menubar from '../components/organism/Menubar';
import about_bg01_1 from '../images/about_bg01-1.png'

const _About_store = () => {
    return (
        <Wrapper>
            <Menubar name="about"/>
            <Section1>
                <Ab_title1>사람들의 아침식탃에 올라갈<br />신선한 물고기를 위해</Ab_title1>
            </Section1>
            <Section2 />
            <Section3 />
        </Wrapper>
    )
}

const Menu = styled(Menubar)`
    position : relative;
`

const Wrapper = styled.div`
  width : 100%;
  height : auto;
  overflow-x : hidden;
  overflow-y : auto;
`

const Section1 = styled.div`
    width : 100%;
    height : 156.8vh;
    background : url(${about_bg01_1});
    background-repeat : no-repeat;
    background-size: cover;
`

const Section2 = styled.div`
    width : 100%;
    height : 564.67vh;
    background-color : #ffffff;
`

const Section3 = styled.div`
    width : 100%;
    height : 115.26vh;
    background : url(${about_bg01_1});
    background-repeat : no-repeat;
    background-size: cover;
`
const Ab_title1 = styled.div`
    width : 1180px;
    height : 172px;
    background-color : red;
`


export default _About_store