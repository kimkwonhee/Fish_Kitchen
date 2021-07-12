import React from 'react'
import styled from 'styled-components'
import homeimg_03 from '../../../images/home_img03.jpg'
import mo_homeimg_03 from '../../../images/mo_home_img03.png'
import Fade from 'react-reveal/Fade'

const Homepage_03= ({when}) => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <Fade top distance="20%" duration={1000} when={when}>
                        <HomeTitle>깔끔하고 깨끗하게</HomeTitle>
                    </Fade>
                        <HomeSub>
                            <HomeSubText>
                                <Fade delay={500} duration={1000} when={when}>
                                    검증된 위생 관리 시스템으로 안심하고 드실 수 있습니다
                                </Fade>
                            </HomeSubText>
                            <Fade delay={500} duration={1000} when={when}>
                                <SubText>[어부키친은 생산지에서부터 철저히 품질 관리합니다.] </SubText>
                            </Fade>
                        </HomeSub>
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
    background-position: center center;
    background-size: cover;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        background : url(${mo_homeimg_03});
        background-position: center center;
        background-size: cover;
    }
`

const Section = styled.div`
    width : 1200px;
    margin-top : 67.4vh;

    @media all and (max-width:1200px) {
        width : 90%;
    }    
`

const HomeTitle = styled.div`
    font-size: 52px;
    font-weight: 600;
    letter-spacing: 1.04px;
    color: #ffffff;
    margin-bottom : 8px;

    @media all and (max-width:1200px) {
        font-size: 24px;
    }
`

const HomeSub = styled.div`
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.44px;
    line-height: 1.73;
    color: #ffffff;
    word-break : keep-all;

    @media all and (max-width:1200px) {
        font-size: 14px;
    }
`

const HomeSubText = styled.div`
    width : 520px;

    @media all and (max-width:1200px) {
        width : 190px;
    }
`

const SubText = styled.div`
    margin-top : 12px;
    font-size: 15px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #ffffff;

    @media all and (max-width:1200px) {
        font-size: 10px;
    }
`

export default Homepage_03;