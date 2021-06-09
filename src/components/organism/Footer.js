import React from 'react'
import styled from 'styled-components'
import Inquirybtn from '../atom/Inquirybtn'
import { Link } from 'react-router-dom'
import gpsimg from '../../images/footer_gps_icon.png'

const Footer = () => {
    return (
        <Wrapper>
            <Inner>
                <TextArea>
                    <CompanyName>(주)바이오션</CompanyName>
                    <CompanyAddress>경기도 용인시 기흥구 동백중앙로 16번길, 16-25 403호<Gpsimg src={gpsimg} alt="gps"/></CompanyAddress>
                    <CompanyTel>info@mystie.com  |  (031) 548. 0022</CompanyTel>
                </TextArea>
                <InquiryArea>
                    <LinkTag to='/inquiry'>
                        <Inquiry>문의하기</Inquiry>
                    </LinkTag>
                </InquiryArea>
            </Inner>
            <FooterText>COPYRIGHT 2014-2021 BY.OCEAN. ALL RIGHTS RESERVED.</FooterText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    background : #222222;

    @media all and (max-width:1200px) {
        justify-content : initial;
    }
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    margin-bottom : 20px;
    border-bottom : 1px solid #555555;
    display : flex;
    padding : 60px 0px 54px 0px;
    
    @media all and (max-width:1200px) {
        width : 92%;
        padding : 50px 0px 40px 0px;
        display : block;
    }
`

const TextArea = styled.div`
    width : 100%;
    height : 100px;

    @media all and (max-width:1200px) {
        text-align : center;
        margin-bottom : 40px;
    }
`

const CompanyName = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    color: #ffffff;

    @media all and (max-width:1200px) {
        font-size: 14px;
        margin-bottom : 16px;
    }
`

const CompanyAddress = styled.div`
    font-size: 18px;
    line-height: 1.78;
    color: #c1c1c1;
    
    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.57;
        margin-bottom : 11px;
    }
`

const Gpsimg = styled.img`
    width : 14px;
    height : 21px;
    margin-bottom: 8px;
    margin-left: 10px;
    
    @media all and (max-width:1200px) {
        width : 10px;
        height : 15px;
        margin-left: 8px;
    }
`

const CompanyTel = styled.div`
    font-size: 18px;
    line-height: 1.78;
    color: #c1c1c1;

    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.57;
    }
`

const InquiryArea = styled.div`
    @media all and (max-width:1200px) {
        display : flex;
        justify-content : center;
    }
`

const Inquiry = styled(Inquirybtn)`
    @media all and (max-width:1200px) {
        width : 200px;
        height : 44px;
    }
`

const FooterText = styled.div`
    font-size: 17px;
    font-weight: 300;
    line-height: 1.88;
    color: #555555;
    margin-bottom : 60px;

    @media all and (max-width:1200px) {
        margin-bottom : 50px;
        font-size: 10px;
        color: #c1c1c1;
    }
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

export default Footer