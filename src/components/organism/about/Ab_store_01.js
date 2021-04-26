import React from 'react'
import styled from 'styled-components'
import about_bg01_2 from '../../../images/about_bg01-2.png'
import logo from '../../../images/logo_02.png'

const Ab_store_01 = () => {
    return (
        <Wrapper>
            <Empty />
            <BackgroudArea>
                <Bgimg />
                <ContentsArea>
                    <HeaderTitle>사람들의 아침식탁에 올라갈<br />신선한 물고기를 위해</HeaderTitle>
                    <LogoArea>
                        <Logoimg src={logo} alt="logo"/>
                    </LogoArea>
                    <VerticalimgArea>
                        <Vertical />
                    </VerticalimgArea>
                    <FooterContents>“어부키친은 7년간의 노하우를 바탕으로<br />소비자에게 신선한 수산물을 제공하기 위해 만들어진 브랜드입니다.”</FooterContents>
                </ContentsArea>
            </BackgroudArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   /* height : 144.47vh; */
   height : 1400px;
   background : #05103d;
`

const Empty = styled.div`
    width : 100%;
    height : 100px;
`
const BackgroudArea = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    /* background-color : green; */
`

const Bgimg = styled.div`
    width : 62.5vw;
    height : 80.37vh;
    margin-top : 1.92vh;
    background : url(${about_bg01_2});
    background-repeat : no-repeat;
    background-size: cover;
`

const ContentsArea = styled.div`
    position : absolute;
    width : 62.5vw;
    height : 89.07vh;
    /* height : 962px; */
    margin-top : 19.81vh;
    /* background-color : blue; */
`

const HeaderTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.96px;
    text-align: center;
    color: #ffffff;
`

const LogoArea = styled.div`
    width : 100%;
    height : 27.03vh;
    margin-top : 12.31vh;
    display : flex;
    justify-content :center;
     /* background-color : red; */
`

const Logoimg = styled.img`
    width : 11.04vw;
    height : 100%;
    /* background-color : green; */
`

const VerticalimgArea = styled.div`
    width : 100%;
    height : 20.55vh;
    margin-top : 4.62vh;
    display : flex;
    justify-content : center;
    /* background-color : green; */
`

const Vertical = styled.div`
    width : 2px;
    height : 100%;
    background : #ffffff;
    border-radius : 10%;
`

const FooterContents = styled.div`
    font-size: 24px;
    line-height: 1.75;
    letter-spacing: 0.48px;
    text-align: center;
    color: #ffffff;
    margin-top : 4.62vh;
`

export default Ab_store_01