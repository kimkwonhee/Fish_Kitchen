import React from 'react'
import styled from 'styled-components'
import InquiryContents from '../InquiryContents'

const Inquiry_01 = () => {
    return (
        <Wrapper>
            <InquiryTextArea>
                <IqTitle>문의는 언제든 환영입니다.</IqTitle>
                <IqContents1>유관 부서 검토 후 1주일 이내로 연락 드리겠습니다.</IqContents1>
                <IqContents2>문의 메일 : info@mystie.com </IqContents2>
            </InquiryTextArea>
            <DetailArea>
                <InquiryContents />
            </DetailArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* background : red; */
`

const InquiryTextArea = styled.div`
    width : 1200px;
    height : 220px;
    margin-top : 250px;
    border-bottom : 3px solid #05103d;
    /* background : green; */
`
const IqTitle = styled.div`
    font-size: 52px;
    font-weight: bold;
    line-height: 1.46;
    color: #05103d;
    margin-bottom : 20px;
`
const IqContents1 = styled.div`
    font-size: 24px;
    line-height: 1.71;
    color: #000000;
`
const IqContents2 = styled.div`
    font-size: 20px;
    line-height: 1.9;
    color: #000000;
`
// Detail Contents
const DetailArea = styled.div`
    width : 1200px;
    margin-top : 68px;
    margin-bottom : 150px;
`

export default Inquiry_01