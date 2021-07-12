import React from 'react'
import styled from 'styled-components'
import homeimg_03 from '../../../images/home_img03.jpg'
import mo_homeimg_03 from '../../../images/mo_home_img03.png'

const Homepage_03= ({side}) => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <HomeTitle side={side}>깔끔하고 깨끗하게</HomeTitle>
                    <HomeSub>
                        <HomeSubText side={side}>검증된 위생 관리 시스템으로 안심하고 드실 수 있습니다</HomeSubText >
                        <SubText side={side}>[어부키친은 생산지에서부터 철저히 품질 관리합니다.] </SubText>    
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
    margin-bottom : 18px;
    opacity: 0;

    @media all and (max-width:1200px) {
        font-size: 24px;
    }

    animation-name : ${props => props.side === 2 ? 'fadeIn' : 'none'};
    animation-duration : 1s;
    animation-timing-function : ease-out;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;

    @keyframes fadeIn {
        0% {
            transform: translate3d(0px, 0px, 0px);
            opacity: 0;
        }
        100% {
            transform: translate3d(0px, 10px, 0px);
            opacity: 1;
        }
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
    opacity: 0;

    @media all and (max-width:1200px) {
        width : 190px;
    }

    animation-name : ${props => props.side === 2 ? 'fadeIn2' : 'none'};
    animation-duration : 1s;
    animation-timing-function : ease-out;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;
    animation-delay : 500ms;

    @keyframes fadeIn2 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
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
    opacity: 0;

    animation-name : ${props => props.side === 2 ? 'fadeIn3' : 'none'};
    animation-duration : 1s;
    animation-timing-function : ease-out;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;
    animation-delay : 500ms;

    @keyframes fadeIn3 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media all and (max-width:1200px) {
        font-size: 10px;
    }
`

export default Homepage_03;