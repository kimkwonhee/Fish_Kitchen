import React from 'react'
import styled from 'styled-components'
import homeimg_02 from '../../../images/home_img02.jpg'
import Fade from 'react-reveal/Fade'

const Homepage_02 = () => {
    return (
        <Wrapper>
            <BackImg>
                <Section>
                    <HomeTitle>신선함을 고스란히</HomeTitle>
                    <HomeSub>어부키친은 최신식 생산 시설로 제품 생산성 및 품질에<br />
                        최선의 노력을 기울이고 있습니다</HomeSub>
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
    min-height: 100%;
    background-position: center center;
    background-size: cover;
`

const Section = styled.div`
    width : 50vw;
    float : right;
    margin-top : 47.4vh;
`

const HomeTitle = styled.div`
    width : 446px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 52px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-align: left;
    color: #ffffff;
    margin-bottom : 8px;
`

const HomeSub = styled.div`
    width : 447px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: left;
    line-height: 1.4;
    color: #ffffff;
`

export default Homepage_02;