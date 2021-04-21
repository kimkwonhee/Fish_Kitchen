import React from 'react'
import styled from 'styled-components'
import Logoimg from '../../images/menu_logo.png'
import Menubtn from '../atom/Menubtn'

const Menubar = ({name}) => {
    
    const menulist = [
        { title : 'Home'},
        { title : 'ABOUT'},
        { title : 'PRODUCT'},
        { title : 'SHOP'},
        { title : 'INQUIRY'},
    ]

    return (
        <Wrapper>
            <Inner>
                <LogoArea>
                    <img src={Logoimg} alt="menu logo" />
                </LogoArea>
                <MenuArea>
                    {menulist.map(index => {
                        return (
                            <Menubtn key={index}>{index.title}</Menubtn>
                        )
                    })}
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
    display : flex;
`
const LogoArea = styled.div`
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 3vw;
`

const MenuArea = styled.div`
    /* background-color : green; */
    width : 80vw;
    height : 100%;
    display : flex;
`

export default Menubar