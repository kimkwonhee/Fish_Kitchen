import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const HeaderBackgroud = ({img, moimg, children}) => {
    return (
        <Wrapper img={img} moimg={moimg}>
            <Inner>
                <Fade top duration={2000}>
                    <Title>{children}</Title>
                </Fade>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position : relative;
    width : 100%;
    max-height : 800px;
    height : 800px;
    background : url(${(props) => props.img});
    background-repeat : no-repeat;
    background-position : center center;
    background-size: cover;

    @media all and (max-width:1200px) {
        background : url(${(props) => props.moimg});
        background-size: cover;
        background-repeat : no-repeat;
        background-position : center center;
        height : 480px;
        max-height : 480px;
    }
`

const Inner = styled.div`
    width : 1200px;
    padding-top : 500px;
    margin : 0 auto;
    
    @media all and (max-width:1200px) {
        width : 92%;
        position : absolute;
        bottom : 50px;
        left : 31px;
    }
`

const Title = styled.div`
    font-size: 52px;
    font-weight: 500;
    line-height: 1.46;
    letter-spacing: 1.04px;
    color: #ffffff;
    /* background : red; */

    @media all and (max-width:1200px) {
        width : 285px;
        font-size: 24px;
        line-height: 1.33;
    }
`

export default HeaderBackgroud