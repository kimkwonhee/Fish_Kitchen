import React from 'react'
import styled from 'styled-components'
import Inquirebtn from '../atom/Inquirebtn'

const Footer = () => {
    return (
        <Wrapper>
            <Inner>
                <TextArea>
                    <CompanyName>(주)바이오션</CompanyName>
                    <CompanyAddress>경기도 용인시 기흥구 동백중앙로 16번길, 16-25 403호</CompanyAddress>
                    <CompanyTel>info@mystie.com  |  (031) 548. 0022</CompanyTel>
                </TextArea>
                <Inquirebtn>문의하기</Inquirebtn>
            </Inner>
            <FooterText>COPYRIGHT 2014-2021 BY.OCEAN. ALL RIGHTS RESERVED.</FooterText>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 319px;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    background : #222222;
`

const Inner = styled.div`
    width : 1200px;
    height : 153px;
    margin-bottom : 1.85vh;
    border-bottom : 1px solid #555555;
    display : flex;
    /* background : red; */
`

const TextArea = styled.div`
    width : 100%;
    height : 100px;
    /* background : green; */
`

const CompanyName = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.8;
    color: #ffffff;
`

const CompanyAddress = styled.div`
    font-size: 18px;
    line-height: 1.78;
    color: #c1c1c1;
`

const CompanyTel = styled.div`
    font-size: 18px;
    line-height: 1.78;
    color: #c1c1c1;
`

const FooterText = styled.div`
    font-size: 1.063rem;
    font-weight: 300;
    line-height: 1.88;
    color: #555555;
`

export default Footer