import React from 'react'
import styled from 'styled-components'

const Inquirybtn = ({children}) => {
    return (
        <Wrapper>
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
  font-weight: bold;
  color: #05103d;
`

export default Inquirybtn