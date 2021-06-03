import React from 'react'
import styled from 'styled-components'
import homeimg_01 from '../../../images/home_img01.jpg'
import logo from '../../../images/home_logo.png'
import Fade from 'react-reveal/Fade'

const Homepage_01 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Empty />
                    <Fade top cascade>
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
    min-height: 100%;
    background-position: center center;
    background-size: cover;
    overflow-x : hidden;
`

const Empty = styled.div`
    width : 100%;
    height : 100px;
    margin-bottom : 22vh;
    /* background : red; */
`

const Logoimg = styled.img`
    width : 180px;
    height : 175px;
`

const HomeTitle = styled.div`
    height: 75px;
    font-size: 52px;
    font-weight: 500;
    color: #ffffff;
`

const HomeSub = styled.div`
    font-size: 22px;
    color: #ffffff;
`

export default Homepage_01;