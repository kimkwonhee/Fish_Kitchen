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
    height : 48px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 3px;
    cursor: pointer;
    background-color: ${props => props.bgcolor || '#ffffff'};
    
    @media all and (max-width:1200px) {

    }
`

const Text = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.ftcolor || '#05103d'};

    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: 400;
    }
`

export default Inquirybtn