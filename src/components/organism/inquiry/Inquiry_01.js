import React from 'react'
import styled from 'styled-components'
import Inquirybtn from '../../atom/Inquirybtn'
import { Link } from 'react-router-dom'

const Inquiry_01 = () => {

    return (
        <Wrapper>
            <InquiryTextArea>
                <IqTitle>문의는 언제든 환영입니다.</IqTitle>
                <IqContents1>유관 부서 검토 후 1주일 이내로 연락 드리겠습니다.</IqContents1>
                <IqContents2>문의 메일 : info@mystie.com </IqContents2>
            </InquiryTextArea>
            <DetailArea>
                <Section>
                    <InquiryInput>
                        <Title>제목</Title>
                        <Input type="text"/>
                    </InquiryInput>
                    <InquiryInput>
                        <Title>담당자명 / 직책</Title>
                        <Input type="text"/>
                    </InquiryInput>
                    <InquiryInput>
                        <Title>연락처</Title>
                        <Input type="text"/>
                    </InquiryInput>
                    <InquiryInput>
                        <Title>이메일</Title>
                        <Input type="text"/>
                    </InquiryInput>
                    <InquiryInput>
                        <Title>회사명</Title>
                        <Input type="text"/>
                    </InquiryInput>
                </Section>
                <Section>
                    <TextArea>
                        <TextAreaText>상세 문의 내용</TextAreaText>
                        <TextBox />
                    </TextArea>
                    <CheckBoxArea>
                        <input type="checkbox"/>
                        <PolicyTextArea>
                            <LinkTag to="/inquiry/policy">
                                <Policy>개인정보방침</Policy>
                            </LinkTag>
                            에 동의합니다.&nbsp;<Accent>(필수)</Accent>
                        </PolicyTextArea>
                    </CheckBoxArea>
                    <InquirybtnArea>
                        <Iqbtn 
                            bgcolor="#05103d" 
                            ftcolor="#ffffff" 
                        >
                            문의 보내기
                        </Iqbtn>
                    </InquirybtnArea>
                </Section>
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
`

const InquiryTextArea = styled.div`
    width : 1200px;
    padding-bottom : 40px;
    margin-top : 250px;
    border-bottom : 2px solid #05103d;
    
    @media all and (max-width:1200px) {
        width : 92%;
        margin-top : 128px;
        padding-bottom : 20px;
    }
`
const IqTitle = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.46;
    color: #05103d;
    margin-bottom : 20px;

    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 16px;
    }

`
const IqContents1 = styled.div`
    font-size: 18px;
    line-height: 1.71;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.57; 
    }
`
const IqContents2 = styled.div`
    font-size: 16px;
    line-height: 1.9;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
    }
`
// Detail Contents
const DetailArea = styled.div`
    width : 1200px;
    margin-top : 68px;
    margin-bottom : 150px;
    display : flex;

    @media all and (max-width:1200px) {
        display : block;
        width : 92%;
        margin-top : 40px;
        margin-bottom : 60px;
    }
`

const Section = styled.div`
    width : 600px;
    /* background-color : red; */
    
    @media all and (max-width:1200px) {
        width : 100%;
    }
`

const TextArea = styled.div`
`

const CheckBoxArea = styled.div`
    width : 100%;
    height: 24px;
    display : flex;
    align-items : center;
    margin-bottom : 40px;

    @media all and (max-width:1200px) {
        margin-bottom : 51px;
    }
`
const InquirybtnArea = styled.div`
    display : flex;
    justify-content : flex-end;
    
    @media all and (max-width:1200px) {
        justify-content : center;
    }
`

const Iqbtn = styled(Inquirybtn)`
    @media all and (max-width:1200px) {
        width : 100%;
        height : 45px;
    }
`

const InquiryInput = styled.div`
    width : auto;
    margin-bottom : 20px;
    
    &:last-child {
        margin-bottom : 0px;
    }

    @media all and (max-width:1200px) {
        margin-bottom : 30px;
    }
`

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 10px;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
        margin-bottom : 10px;
    }
`
const Input = styled.input`
    width : 550px;
    height : 48px;
    border : solid 1px #c1c1c1;

    @media all and (max-width:1200px) {
        width : 100%;
        height : 45px;
    }
`

const TextAreaText = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 10px;

    @media all and (max-width:1200px) {
        margin-top : 20px;
        font-size: 14px;
        line-height: 1.57;
    }
`

const TextBox = styled.textarea`
    width : 100%;
    height : 358px;
    border : solid 1px #c1c1c1;

    @media all and (max-width:1200px) {
        height : 200px;
    }
`

const PolicyTextArea = styled.div`
    font-size: 16px;
    color: #000000;
    margin-left : 12px;
    
    @media all and (max-width:1200px) {
        font-size: 14px;
        margin-left : 8px;
    }
`
const Policy = styled.a`
    color: #3029ff;
`
const Accent = styled.span`
    color: #ff0000;
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

export default Inquiry_01