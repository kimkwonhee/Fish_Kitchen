import React from 'react'
import styled from 'styled-components'
import homeimg_04 from '../../../images/home_img04.jpg'
import mo_homeimg_04 from '../../../images/mo_home_img04.png'
import Fade from 'react-reveal/Fade'

const Homepage_04 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <Fade right duration={2000}>
                        <HomeTitle>7년간의 노하우</HomeTitle>
                    </Fade>
                    <HomeSub>
                        <HomeSubText>
                            <Fade right duration={2000}>
                                7년간 운영하며 얻은 노하우를 어부키친에 고스란히 담았습니다
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
    background : url(${homeimg_04});
    background-repeat : no-repeat;
    background-position: center center;
    background-size: cover;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        background : url(${mo_homeimg_04});
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
    width : 600px;

    @media all and (max-width:1200px) {
        width : 200px;
    }
`

export default Homepage_04;