import React from 'react'
import styled from 'styled-components'

const Inquirybtn = ({className, children}) => {
    return (
        <Wrapper className={className}>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 240px;
    height : 56px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 5px;
    cursor: pointer;
    background-color: #ffffff;
`

const Text = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #05103d;

    @media all and (max-width:1200px) {
        font-size: 14px;
    }
`

export default Inquirybtn