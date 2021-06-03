import React from 'react'
import styled from 'styled-components'
import homeimg_04 from '../../../images/home_img04.jpg'
import Fade from 'react-reveal/Fade'

const Homepage_04 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <Fade right cascade>
                    <HomeTitle>7년간의 노하우</HomeTitle>
                    <HomeSub>7년간 운영하며 얻은 노하우를 어부키친에 고스란히 담았습니다</HomeSub>
                    </Fade>
                </Section>
            </BackImg>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
`

const BackImg = styled.div`
    width : 100%;
    height : 100vh;
    background : url(${homeimg_04});
    background-repeat : no-repeat;
    min-height: 100%;
    background-position: center center;
    background-size: cover;
    display : flex;
    justify-content : center;
`

const Section = styled.div`
    width : 62.5vw;
    height : 150px;
    margin-top : 67.4vh;
    /* background-color : red; */
`

const HomeTitle = styled.div`
    width : 97%;
    font-size: 52px;
    font-weight: 500;
    letter-spacing: 1.04px;
    color: #ffffff;
    margin-bottom : 8px;
    margin-right : 2vw;
    text-align : right;
`

const HomeSub = styled.div`
    width : 97%;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0.44px;
    text-align: left;
    line-height: 1.73;
    text-align : right;
    color: #ffffff;
`

export default Homepage_04;