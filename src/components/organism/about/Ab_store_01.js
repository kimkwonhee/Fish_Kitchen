import React from 'react'
import styled from 'styled-components'
import about_bg01 from '../../../images/about_bg01.png'
import mo_about_bg01 from '../../../images/mo_about_bg01.png'
import logo from '../../../images/logo_02.png'
import Fade from 'react-reveal/Fade'

const Ab_store_01 = () => {
    return (
        <Wrapper>
            <Empty />
            <BackgroudArea>
                <Bgimg />
                    <ContentsArea>
                        <Fade duration={2000}>
                            <HeaderTitle>
                                사람들의 아침식탁에 올라갈<br />신선한 물고기를 위해
                            </HeaderTitle>
                        </Fade>
                        <Fade delay={900} duration={2000}>
                            <LogoArea>
                                <Logoimg src={logo} alt="logo"/>
                            </LogoArea>
                        </Fade>
                        <Fade delay={2000} duration={2000}>
                            <VerticalimgArea>
                                <Vertical />
                            </VerticalimgArea>
                        </Fade>
                        <Fade delay={900} duration={2000}>
                            <FooterContents>“어부키친은 7년간의 노하우를 바탕으로<br />소비자에게 신선한 수산물을 제공하기 위해 만들어진 브랜드입니다.”</FooterContents>
                        </Fade>
                    </ContentsArea>
            </BackgroudArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   background : #05103d;

   @media all and (max-width:1200px) {
        height : 713px;
    }
`

const Empty = styled.div`
    width : 100%;
    height : 100px;

    @media all and (max-width:1200px) {
        height : 68px;
    }
`
const BackgroudArea = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
`

const Bgimg = styled.div`
    position : absolute;
    width : 1200px;
    height : 868px;
    margin-top : 21px;
    background : url(${about_bg01});
    background-repeat : no-repeat;
    background-size: cover;

    @media all and (max-width:1200px) {
        margin-top : 95px;
        width : 92%;
        height : 46.5%;
        background : url(${mo_about_bg01});
        background-repeat : no-repeat;
        background-size: cover;
    }
`

const ContentsArea = styled.div`
    width : 100%;
    margin-top : 235px;
    margin-bottom : 100px;
    
    @media all and (max-width:1200px) {
        margin-top : 40px;
        margin-bottom : 50px;
    }
`

const HeaderTitle = styled.div`
    font-size: 48px;
    font-weight: 500;
    line-height: 1.42;
    letter-spacing: 0.96px;
    text-align: center;
    color: #ffffff;

    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
    }
`

const LogoArea = styled.div`
    width : 100%;
    margin-top : 133px;
    display : flex;
    justify-content :center;

    @media all and (max-width:1200px) {
        margin-top : 110px;
    }
`

const Logoimg = styled.img`
    width: 212px;
    height: 292px;

    @media all and (max-width:1200px) {
        width: 146px;
        height: 196px;
    }
`

const VerticalimgArea = styled.div`
    width : 100%;
    height : 222px;
    margin-top : 50px;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        height : 100px;
        margin-top : 20px;
    }

`

const Vertical = styled.div`
    width : 2px;
    height : 100%;
    background : #ffffff;
    border-radius : 10%;

    @media all and (max-width:1200px) {
        width : 1px;
    }
`

const FooterContents = styled.div`
    font-size: 24px;
    line-height: 1.75;
    letter-spacing: 0.48px;
    text-align: center;
    color: #ffffff;
    margin-top : 50px;

    @media all and (max-width:1200px) {
        width : 280px;
        margin-top : 20px;
        font-size: 14px;
        line-height: 1.57;
        word-break : keep-all;
        margin-left :auto;
        margin-right :auto;
        margin-bottom : 0px;
    }
`

export default Ab_store_01