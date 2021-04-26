import React from 'react'
import styled from 'styled-components'

const InquiryCheckBox = () => {
    return (
        <Wrapper>
            <input type="checkbox"/>
            <Text>
                <Policy>개인정보방침</Policy>에 동의합니다. <Accent>(필수)</Accent>
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
`

const Text = styled.div`
      font-size: 16px;
      color: #000000;
      margin-left : 5px;
`
const Policy = styled.a`
    color: #3029ff;
`
const Accent = styled.span`
    color: #ff0000;
`


export default InquiryCheckBox