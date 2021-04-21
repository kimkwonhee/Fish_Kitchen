import React from 'react'
import Homebtn from '../atom/Homebtn'
import styled from 'styled-components'

const HomebtnGroup = ({onClick}) => {
    return (
        <Wrapper>
            <Homebtn onClick={onClick}/>
            <Homebtn />
            <Homebtn />
            <Homebtn />
            <Homebtn />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
`

export default HomebtnGroup