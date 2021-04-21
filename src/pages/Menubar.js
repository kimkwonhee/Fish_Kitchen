import React from 'react'
import styled from 'styled-components'
import Logoimg from '../images/menu_logo.png'

const Menubar = () => {
    return (
        <Wrapper>
            <Inner>
                <LogoArea>
                    <img src={Logoimg} alt="menu logo" />
                </LogoArea>
                <MenuArea>

                </MenuArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 120px;
    position : fixed;
    top : 0;
    left : 0;
    z-index : 10;
    border-bottom : 0.5px solid rgba(255,255,255,0.4);
`

const Inner = styled.div`
    width : 70.5vw;
    height : 100%;
    margin-left : 12.8vw;
    margin-right : 245px;
    /* background-color : blue; */
    display : flex;
`
const LogoArea = styled.div`
    /* background-color : red; */
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`

const MenuArea = styled.div`
    background-color : green;
    width : 100%;
    height : 100%;
`

export default Menubar