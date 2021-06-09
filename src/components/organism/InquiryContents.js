import React from 'react'
import styled from 'styled-components'
import Inquirybtn from '../atom/Inquirybtn'
import InquiryCheckBox from '../atom/InquiryCheckBox'
import InquiryInput from '../atom/InquiryInput'
import InquiryTextarea from '../atom/InquiryTextarea'

const InquiryContents = () => {
    return (
        <Wrapper>
            <Section>
                <InquiryInput>제목</InquiryInput>
                <InquiryInput>담당자명 / 직책</InquiryInput>
                <InquiryInput>연락처</InquiryInput>
                <InquiryInput>이메일</InquiryInput>
                <InquiryInput>회사명</InquiryInput>
            </Section>
            <Section>
                <TextArea>상세 문의 내용</TextArea>
                <CheckBoxArea>
                    <InquiryCheckBox />
                </CheckBoxArea>
                <InqbtnArea>
                    <Inquirybtn>문의 보내기</Inquirybtn>
                </InqbtnArea>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
`

const Section = styled.div`
    width : 600px;
    /* background : purple; */
`

const TextArea = styled(InquiryTextarea)`
    margin-bottom : 20px;
`
const CheckBoxArea = styled.div`
    width : 100%;
    height: 24px;
    display : flex;
    align-items : center;
    margin-bottom : 70px;
    /* background : green; */
`
const InqbtnArea = styled.div`
    display : flex;
    justify-content : flex-end;
`

export default InquiryContents