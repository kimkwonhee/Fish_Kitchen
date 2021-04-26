import React from 'react'
import styled from 'styled-components'

const InquiryInput = ({children}) => {
    return (
        <Wrapper>
            <Title>{children}</Title>
            <Input type="text"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : auto;
    margin-bottom : 20px;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 15px;
`

const Input = styled.input`
    width : 550px;
    height : 56px;
`

export default InquiryInput;