import React from 'react'
import styled from 'styled-components'
import company_img01 from '../../../images/ab_company_img04.png'
import company_img02 from '../../../images/ab_company_img05.png'
import company_img03 from '../../../images/ab_company_img06.png'
import company_img04 from '../../../images/ab_company_img07.png'
import company_img05 from '../../../images/ab_company_img08.png'
import company_img06 from '../../../images/ab_company_img10.png'
import mobile_company_01 from '../../../images/mo_ab_company_img04.png'
import Fade from 'react-reveal/Fade'

const Ab_company_04 = () => {

    const imglist = [
        {   id : 1, company : '삼성웰스토리', img : company_img01 },
        {   id : 2, company : '현대그린푸드', img : company_img02 },
        {   id : 3, company : '신세계 푸드', img : company_img03 },
        {   id : 4, company : '동원홈푸드', img : company_img04 },
        {   id : 5, company : '쿠팡', img : company_img05 },
        {   id : 5, company : '배민상회', img : company_img06 },
    ]
    return (
        <Fade duration={1000}>
            <Wrapper>
                    <Inner>
                        <LogoArea>
                            {imglist.map((logo) => {
                                return <LogoImg key={logo.id} src={logo.img} alt={logo.company}/> 
                            })}
                        </LogoArea>
                        <MLogoArea>
                            <MobileLogo src={mobile_company_01} alt="company"/>
                        </MLogoArea>
                    </Inner>
            </Wrapper>
        </Fade>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-color : #fcfcfc;
`

const Inner = styled.div`
    width : 1200px;
    height : 180px;
    display : flex;
    justify-content : center;
    align-items : center;
    
    @media all and (max-width:1200px) {
        width : 92%;
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

const LogoImg = styled.img`
    margin-right : 35px;

    &:last-child {
        margin-right : 0px;
    }
`

const MLogoArea = styled.div`
    display : none;
    @media all and (max-width:1200px) {
        width : 100%;
        display : flex;
        justify-content : center;
        padding : 20px 0px 25px 0px;
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


export default Ab_company_04