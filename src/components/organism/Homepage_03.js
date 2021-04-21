import React from 'react'
import styled from 'styled-components'
import homeimg_03 from '../../images/home_img03.jpg'
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
`

const Section = styled.div`
    width : 465px;
    margin-top : 47.4vh;
    margin-left : 19.2vw;
`

const HomeTitle = styled.div`
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 52px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #ffffff;
    margin-bottom : 8px;
`

const HomeSub = styled.div`
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: left;
    line-height: 1.4;
    color: #ffffff;
`

export default Homepage_03;