import React , { useEffect, useState, useRef }from 'react'
import styled from 'styled-components'
import Logoimg from '../../images/menu_logo01.png'
import Menubtn from '../atom/Menubtn'
import { Link, withRouter } from 'react-router-dom'
import SubMenubtn from '../atom/SubMenubtn'

const Menubar = ({ location }) => {
    const pathname = location.pathname;   
    
    const btnstatus = useRef(null);

    const mousOver = (index) => {
        console.log(index);
    }
    
       const menulist = [
        {   
            id  : 1,
            title : 'HOME',
            link : '/'
        },
        {   
            id : 2,
            title : 'ABOUT',
            link : '/store'
        },
        { 
            id : 3,
            title : 'PRODUCT',
            link : '/product'
        },
        { 
            id : 4,
            title : 'SHOP',
            link : ''
        },
        { 
            id : 5,
            title : 'INQUIRY',
            link : '/inquiry'
        },
    ]

    return (
        <Wrapper>
            <Inner>
                <LogoArea>
                    <Link to="/">
                        <img src={Logoimg} alt="menu logo" />
                    </Link>
                </LogoArea>
                <MenuArea>
                    {menulist.map(index => {
                        return (
                            <LinkTag to={index.link} >
                                <Menubtn 
                                    key={index.id} 
                                    link={index.link}
                                    path={pathname}
                                    onMouseOver={mousOver(index.id)}
                                    ref={btnstatus}
                                >
                                    {index.title}
                                </Menubtn>
                            </LinkTag>
                        )
                    })}
                </MenuArea>
            </Inner>
            <SubInner>
                <SubMenubtn />
            </SubInner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 200px;
    position : fixed;
    top : 0;
    left : 0;
    z-index : 10;
    background : red;
`

const Inner = styled.div`
    width : 100%;
    height : 100px;
    display : flex;
    border-bottom : 0.5px solid rgba(255,255,255,0.4);
    background-color : gray;
`

const SubInner = styled.div`
    width : 100%;
    height : 100px;
    background : blue;
`

const LogoArea = styled.div`
    height : 100%;
    margin-left : 300px;
    margin-right : 220px;
    text-align : center;
    /* background-color : black; */
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

const MenuArea = styled.div`
    height : 100px;
    display : flex;
    /* background-color : green; */
`





export default withRouter(Menubar)