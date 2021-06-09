import React from 'react'
import styled from 'styled-components'

const Inquirybtn = ({className, bgcolor, ftcolor, children}) => {
    return (
        <Wrapper 
            className={className} 
            bgcolor={bgcolor}
        >
            <Text ftcolor={ftcolor}>
                {children}
            </Text>
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
    background-color: ${props => props.bgcolor || '#ffffff'};
`

const Text = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.ftcolor || '#05103d'};

    @media all and (max-width:1200px) {
        font-size: 14px;
    }
`

export default Inquirybtn