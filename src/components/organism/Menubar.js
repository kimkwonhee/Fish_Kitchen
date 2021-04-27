import React , { useEffect }from 'react'
import styled from 'styled-components'
import Logoimg from '../../images/menu_logo01.png'
import Menubtn from '../atom/Menubtn'
import { Link, withRouter } from 'react-router-dom'

const Menubar = ({ location }) => {

    const pathname = location.path;
    
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
            link : '/',
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
                                >
                                    {index.title}
                                </Menubtn>
                            </LinkTag>
                        )
                    })}
                </MenuArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 100px;
    position : fixed;
    top : 0;
    left : 0;
    z-index : 10;
    border-bottom : 0.5px solid rgba(255,255,255,0.4);
`

const Inner = styled.div`
    width : 70.5vw;
    height : 100%;
    margin-left : 14.8vw;
    display : flex;
    justify-content : center;
    /* background-color : gray; */
`
const LogoArea = styled.div`
    width : 470px;
    height : 100%;
    display : flex;
    align-items : center;
    /* background-color : black; */
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

const MenuArea = styled.div`
    /* background-color : green; */
    height : 100%;
    display : flex;
`

export default withRouter(Menubar)