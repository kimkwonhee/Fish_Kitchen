import React from 'react'
import styled from 'styled-components'
import company_img01 from '../../../images/ab_company_img04.png'
import company_img02 from '../../../images/ab_company_img05.png'
import company_img03 from '../../../images/ab_company_img06.png'
import company_img04 from '../../../images/ab_company_img07.png'
import company_img05 from '../../../images/ab_company_img08.png'
import mobile_company_01 from '../../../images/mo_ab_company_img04.png'
import Fade from 'react-reveal/Fade'

const Ab_company_03 = () => {

    const imglist = [
        {   id : 1, company : '삼성웰스토리', img : company_img01 },
        {   id : 2, company : '현대그린푸드', img : company_img02 },
        {   id : 3, company : '신세계 푸드', img : company_img03 },
        {   id : 4, company : '동원홈푸드', img : company_img04 },
        {   id : 5, company : '쿠팡', img : company_img05 },
    ]
    return (
        <Wrapper>
            <Inner>
                <Fade top distance="20%" duration={1000}>
                    <Title>PARTNERS</Title>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <SubTitle>바이오션은 서로 신뢰하며 파트너사와 함께합니다</SubTitle>
                </Fade>
            </Inner>
            <Fade duration={1000}>
                <LogoInner>
                    <LogoArea>
                        {imglist.map((logo) => {
                            return <img key={logo.id} src={logo.img} alt={logo.company}/>
                        })}
                    </LogoArea>
                    <MLogoArea>
                        <MobileLogo src={mobile_company_01} alt="company"/>
                    </MLogoArea>
                </LogoInner>
            </Fade>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

const Inner = styled.div`
    width : 1200px;
    height : 265px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    
    @media all and (max-width:1200px) {
        width : 92%;
        height : 173px;
    }
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    color: #000000;
    margin-bottom : 12px;

    @media all and (max-width:1200px) {
        font-size: 22px;
        line-height: 1.33;
        margin-bottom : 20px;
    }
`

const SubTitle = styled.div`
    font-size: 20px;
    text-align: center;
    color: #000000;
    /* margin-bottom : 100px; */
    
    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom : 0px;
    }
`

const LogoInner = styled.div`
    width : 100%;
    height : 180px;
    display : flex;
    align-items : center;
    justify-content : center;
    background : #fcfcfc;
    /* background-color : red; */

    @media all and (max-width:1200px) {
        height : auto;
    }
`

const LogoArea = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;
    
    @media all and (max-width:1200px) {
        display : none;
    }
`

const MLogoArea = styled.div`
    display : none;
    @media all and (max-width:1200px) {
        display : flex;
        justify-content : center;
    }
`

const MobileLogo = styled.img`
    display : none;
    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
        height : auto;
    }
`

export default Ab_company_03