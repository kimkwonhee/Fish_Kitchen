import React from 'react'
import styled from 'styled-components'
import Inquirybtn from '../atom/Inquirybtn'
import { Link, withRouter } from 'react-router-dom'
import gpsimg from '../../images/footer_gps_icon.png'

const Footer = ({location}) => {

    let pathname = location.pathname;

    return (
        <Wrapper>
            <Inner>
                <TextArea>
                    <CompanyName>(주)바이오션</CompanyName>
                    <CompanyAddress>본사 : 경기도 용인시 기흥구 동백중앙로 16번길, 16-25 403호<Gpsimg src={gpsimg} alt="gps"/></CompanyAddress>
                    <CompanyAddress>제1공장 : 경기도 광주시 곤지암읍 열미길 185-26<Gpsimg src={gpsimg} alt="gps"/></CompanyAddress>
                    <CompanyTel>director@fisherskitchen.co.kr | (031) 548. 0022</CompanyTel>
                </TextArea>
                <InquiryArea>
                    <LinkTag to='/inquiry'>
                        <Inquiry path={pathname}>문의하기</Inquiry>
                    </LinkTag>
                </InquiryArea>
            </Inner>
            <FooterText>COPYRIGHT 2014-2021 BUYOCEAN. ALL RIGHTS RESERVED.</FooterText>
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
    padding : 70px 0px 40px 0px;
    
    @media all and (max-width:1200px) {
        width : 92%;
        padding: 60px 0px 40px 0px;
        display : block;
        /* background-color : green; */
    }
`

const TextArea = styled.div`
    width : 100%;

    @media all and (max-width:1200px) {
        text-align : center;
        margin-bottom : 40px;
    }
`

const CompanyName = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    color: #ffffff;
    margin-bottom : 16px;

    @media all and (max-width:1200px) {
        font-size: 14px;
        margin-bottom : 16px;
    }
`

const CompanyAddress = styled.div`
    font-size: 14px;
    line-height: 1.78;
    color: #c1c1c1;
    margin-bottom : 8px;
    
    @media all and (max-width:1200px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.57;
        margin-bottom : 8px;
    }
`

const Gpsimg = styled.img`
    width: 10px;
    height: 16px;
    margin-bottom: 3px;
    margin-left: 6px;
    
    @media all and (max-width:1200px) {
        width : 10px;
        height : 15px;
        margin-left: 8px;
    }
`

const CompanyTel = styled.div`
    font-size: 14px;
    color: #c1c1c1;
    margin-top : 18px;

    @media all and (max-width:1200px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.57;
    }
`

const InquiryArea = styled.div`
    @media all and (max-width:1200px) {
        width : 100%;
        display : flex;
        justify-content : center;
        /* background-color : red; */
    }
`

const Inquiry = styled(Inquirybtn)`
    display : ${props => props.path === '/inquiry' ? 'none' : 'flex'};

    @media all and (max-width:1200px) {
        width : 100%;
        height : 44px;
    }
`

const FooterText = styled.div`
    font-size: 14px;
    font-weight: 300;
    line-height: 1.88;
    color: #555555;
    margin-bottom : 60px;

    @media all and (max-width:1200px) {
        margin-bottom : 50px;
        font-size: 10px;
        color: #c1c1c1;
        letter-spacing: 1.1px;
    }
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
    width : 100%;
`

export default withRouter(Footer)