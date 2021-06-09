import React from 'react'
import styled from 'styled-components'

const _Policy = () => {
    return (
        <Wrapper>
            <Inner>
                <div>111</div>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : auto;
   display : flex;
   justify-content : center;
   align-items : center;
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    display : flex;
    align-items : center;
    margin : 100px 0px;
    background-color : grey;
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
        margin : 60px 0px;
    }
`

export default _Policy