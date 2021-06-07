import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const HeaderBackgroud = ({img, children}) => {
    return (
        <Wrapper img={img}>
            <Inner>
                <Fade top cascade>
                    <Title>{children}</Title>
                </Fade>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    /* height : 74.07vh; */
    height : 800px;
    background : url(${(props) => props.img});
    background-repeat : no-repeat;
    background-size: cover;
    display : flex;
    justify-content : center;
`

const Inner = styled.div`
    width : 1200px;
    height : 151px;
    margin-top : 500px;
    /* background : blue; */
`

const Title = styled.div`
    font-size: 52px;
    font-weight: bold;
    line-height: 1.46;
    letter-spacing: 1.04px;
    color: #ffffff;
`

export default HeaderBackgroud