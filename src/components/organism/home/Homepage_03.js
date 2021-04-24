import React from 'react'
import styled from 'styled-components'
import homeimg_03 from '../../../images/home_img03.jpg'
import Fade from 'react-reveal/Fade'

const Homepage_03= () => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <HomeTitle>깔끔하고 깨끗하게</HomeTitle>
                    <HomeSub>검증된 위생 관리 시스템으로 안심하고 드실수 있습니다</HomeSub>
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
    background : url(${homeimg_03});
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
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 3.25rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #ffffff;
    margin-bottom : 8px;
    /* background-color : green; */
    margin-right : 2vw;
    /* text-align : right; */
`

const HomeSub = styled.div`
    width : 97%;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: left;
    line-height: 1.72;
    /* background-color : blue; */
    /* text-align : right; */
    color: #ffffff;
`

export default Homepage_03;