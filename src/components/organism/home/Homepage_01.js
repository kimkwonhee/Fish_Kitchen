import React from 'react'
import styled from 'styled-components'
import homeimg_01 from '../../../images/home_img01.jpg'
import mo_homeimg_01 from '../../../images/mo_home_img01.png'
import logo from '../../../images/home_logo.png'
import Fade from 'react-reveal/Fade'

const Homepage_01 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Empty />
                    <Fade top duration={2000}>
                        <Logoimg src={logo} alt="logo"/>
                        <HomeTitle>어부 키친</HomeTitle>
                        <HomeSub>사람들의 아침 식탁에 올라갈 신선한 물고기를 위해</HomeSub>
                    </Fade>
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
    width : 180px;
    height : 175px;

    @media all and (max-width:1200px) {
        width : 88px;
        height : 84px;
        margin-bottom : 15px;
    }
`

const HomeTitle = styled.div`
    font-size: 52px;
    font-weight: 500;
    color: #ffffff;

    @media all and (max-width:1200px) {
        font-size: 24px;
        color: #f5f5f5;
        margin-bottom : 8px;
    }
`

const HomeSub = styled.div`
    font-size: 22px;
    color: #ffffff;

    @media all and (max-width:1200px) {
        width : 170px;
        font-size: 0.875rem;
        margin : 0 auto;
    }
`

export default Homepage_01;