import React from 'react'
import styled from 'styled-components'
import homeimg_01 from '../../../images/home_img01.jpg'
import mo_homeimg_01 from '../../../images/mo_home_img01.png'
import logo from '../../../images/logo_02.png'
import Fade from 'react-reveal/Fade'

const Homepage_01 = () => {

    return (
        <Wrapper>
            <BackImg>
                <Empty />
                    <Fade top distance="10%" duration={1000}>
                        <Logoimg src={logo} alt="logo"/>
                    </Fade>
                    <Fade delay={500} duration={1000} >
                        <HomeSub>사람들의 아침 식탁에 올라갈 신선한 수산물을 위해</HomeSub>
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
    width : 212px;
    height : 292px;
    margin-bottom : 10px;

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

    @media all and (max-width:1200px) {
        width : 170px;
        font-size: 14px;
        margin : 0 auto;
    }
`

export default Homepage_01;