import React from 'react'
import styled from 'styled-components'
import homeimg_01 from '../../../images/home_img01.jpg'
import mo_homeimg_01 from '../../../images/mo_home_img01.png'
import logo from '../../../images/logo_02.png'

const Homepage_01 = ({side}) => {

    return (
        <Wrapper>
            <BackImg>
                <Empty />
                <Logoimg side={side} src={logo} alt="logo"/>
                <HomeSub side={side}>사람들의 아침 식탁에 올라갈 신선한 수산물을 위해</HomeSub>
            </BackImg>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : center;
  text-align :center;
`

const BackImg = styled.div`
    width : 100%;
    height : 100vh;
    background : url(${homeimg_01});
    background-repeat : no-repeat;
    background-position: center center;
    background-size: cover;
    overflow-x : hidden;

    @media all and (max-width:1200px) {
        background : url(${mo_homeimg_01});
        background-position: center center;
        background-size: cover;
    }
`

const Empty = styled.div`
    width : 100%;
    height : 100px;
    margin-bottom : 22vh;
`

const Logoimg = styled.img`
    width : 212px;
    height : 292px;
    margin-bottom : 20px;
    opacity: 0;

    animation-name : ${props => props.side === 0 ? 'fadeIn' : 'none'};
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

    @media all and (max-width:1200px) {
        width : 146px;
        height : 196px;
        margin-bottom : 15px;
    }
`

const HomeSub = styled.div`
    font-size: 20px;
    font-weight: 300;
    color: #ffffff;
    opacity: 0;

    @media all and (max-width:1200px) {
        width : 170px;
        font-size: 14px;
        margin : 0 auto;
    }

    animation-name : ${props => props.side === 0 ? 'fadeIn1' : 'none'};
    animation-duration : 1s;
    animation-timing-function : ease-out;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;
    animation-delay : 500ms;

    @keyframes fadeIn1 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export default Homepage_01;