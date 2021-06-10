import React from 'react'
import styled from 'styled-components'
import homeimg_02 from '../../../images/home_img02.jpg'
import mo_homeimg_02 from '../../../images/mo_home_img02.png'
import Fade from 'react-reveal/Fade'

const Homepage_02 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                <Fade right distance="10%" duration={1000}>
                    <HomeTitle>신선함을 고스란히</HomeTitle>
                </Fade>
                    <HomeSub>
                        <HomeSubText>
                            <Fade right distance="10%" duration={1000}>
                            어부키친은 최신식 생산 시설로 제품 생산성 및 품질에 최선의 노력을 기울이고 있습니다
                            </Fade>
                        </HomeSubText>
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
    background : url(${homeimg_02});
    background-repeat : no-repeat;
    background-position: center center;
    background-size: cover;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        background : url(${mo_homeimg_02});
        background-position: center center;
        background-size: cover;
        justify-content : flex-end;
        display : flex;
        justify-content : center;
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
    font-weight: 500;
    letter-spacing: 1.04px;
    color: #ffffff;
    margin-bottom : 8px;
    margin-right : 2vw;
    text-align : right;
    
    @media all and (max-width:1200px) {
        font-size: 24px;
    }
`

const HomeSub = styled.div`
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0.44px;
    line-height: 1.73;
    display : flex;
    justify-content : flex-end;
    text-align : right;
    color: #ffffff;
    margin-right : 2vw;
    word-break : keep-all;

    @media all and (max-width:1200px) {
        font-size: 14px;
    }
`

const HomeSubText = styled.div`
    width : 490px;

    @media all and (max-width:1200px) {
        width : 190px;
    }
`

export default Homepage_02;