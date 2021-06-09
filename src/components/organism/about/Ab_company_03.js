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
                <Fade top duration={2000}>
                    <Title>PARTNERS</Title>
                </Fade>
                <Fade delay={700} duration={2000}>
                    <SubTitle>바이오션은 서로 신뢰하며 파트너사와 함께합니다</SubTitle>
                </Fade>
                <Fade delay={1200} duration={2000}>
                    <LogoArea>
                        {imglist.map((logo) => {
                            return <img key={logo.id} src={logo.img} alt={logo.company}/>
                        })}
                    </LogoArea>
                </Fade>
                <Fade delay={1500} duration={2000}>
                    <MobileLogo src={mobile_company_01} alt="company"/>
                </Fade>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        
    }
`

const Inner = styled.div`
    width : 1200px;
    margin : 100px 0px 44px 0px;
    /* background : green; */
    
    @media all and (max-width:1200px) {
        width : 92%;
        margin : 60px 0px 0px 0px;
    }
`
const Title = styled.div`
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    color: #000000;
    margin-bottom : 12px;

    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 20px;
    }
`

const SubTitle = styled.div`
    font-size: 24px;
    text-align: center;
    color: #000000;
    margin-bottom : 100px;
    
    @media all and (max-width:1200px) {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom : 0px;
    }
`

const LogoArea = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;
    /* background : grey; */
    
    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileLogo = styled.img`
    display : none;
    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
    }
`

export default Ab_company_03