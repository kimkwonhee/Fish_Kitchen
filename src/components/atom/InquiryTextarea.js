import React from 'react'
import styled from 'styled-components'

const InquiryTextarea = ({children}) => {
    return (
        <Wrapper>
            <Title>{children}</Title>
            <textarea rows="25" cols="82"></textarea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : auto;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 15px;
`

export default InquiryTextarea