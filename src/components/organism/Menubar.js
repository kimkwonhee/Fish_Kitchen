import React , { useEffect, useState, useRef }from 'react'
import styled from 'styled-components'
import Logoimg1 from '../../images/menu_logo01.png'
import Logoimg2 from '../../images/menu_logo02.png'
import mLogoimg1 from '../../images/mo_menu_logo01.png'
import mLogoimg2 from '../../images/mo_menu_logo02.png'
import mLogoimg3 from '../../images/mo_menu_logo03.png'
import mMenubtn1 from '../../images/mo_menu_btn_white.png'
import mMenubtn2 from '../../images/mo_menu_btn_blue.png'
import mMenuClose from '../../images/mo_menu_close_btn.png'
import Menubtn from '../atom/Menubtn'
import { Link, withRouter } from 'react-router-dom'
import SubMenubtn from '../atom/SubMenubtn'
import { Drawer } from 'antd';

const Menubar = ({ location }) => {
    const pathname = location.pathname;   
    const btnstatus = useRef(null);

    const [mouseOver, setMouseOver]  = useState(false);
    const [scrollTop, setScrollTop] = useState(false);
    const [visible, setVisible] = useState(false);

    const onScrollChange = () => {
        if (window.pageYOffset <= 0) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    }

    useEffect(() => {
        setMouseOver(false)
        setScrollTop(pathname !== '/home' || pathname !== '/inquiry' ? true : false)
        if (pathname !== '/home' || pathname !== '/inquiry') {
            window.addEventListener('scroll', onScrollChange)
        }
        return () => window.removeEventListener('scroll', onScrollChange)
    }, [pathname])


    const menulist = [
        {   id : 1, title : 'HOME', link : '/home' },
        {   id : 2, title : 'ABOUT', link : '/about_store' },
        {   id : 3, title : 'PRODUCT', link : '/product' },
        {   id : 4, title : 'SHOP', link : '' },
        {   id : 5, title : 'INQUIRY', link : '/inquiry' },
    ]
    const submenulist = [
        {   id : 1, title : '어부키친 이야기', link : '/about_store' },
        {   id : 2, title : '비전과 철학', link : '/about_vision' },
        {   id : 3, title : '회사소개', link : '/about_company' },
        {   id : 4, title : '히스토리', link : '/about_history' },
    ]

    return (
        <>
            <Wrapper top={scrollTop}>
                <Mainmenu top={scrollTop}>
                    <Inner>
                        <LogoArea>
                            <Link to="/home">
                                <LogoImg path={pathname} top={scrollTop}/>
                            </Link>
                        </LogoArea>
                        <MenuArea>
                            {menulist.map(index => {
                                return (
                                    <LinkTag key={index.id} to={index.link} >
                                        <Menu 
                                            id={index.id}
                                            link={index.link}
                                            path={pathname}
                                            ref={btnstatus}
                                            top={scrollTop}
                                            onMouseOver={(e) => {index.id == 2 
                                                                ? setMouseOver(true) 
                                                                : setMouseOver(false)}}
                                        >
                                            {index.title}
                                        </Menu>
                                    </LinkTag>
                                )
                            })}
                            <MMenubtn 
                                src={scrollTop ? mMenubtn1 : mMenubtn2} 
                                alt="menu btn"
                                onClick={(e) => setVisible(true)}
                            />
                        </MenuArea>
                    </Inner>
                </Mainmenu>
                <SubInner
                    top={scrollTop} 
                    subdisplay={mouseOver}
                    onMouseOver={(e)=> setMouseOver(true)}
                    onMouseOut={(e) => setMouseOver(false)}
                    >
                    <SubMenuSection>
                        {submenulist.map(list => {
                            return <LinkTag key={list.id} to={list.link}>
                                        <SubMenubtn 
                                            link={list.link} 
                                            top={scrollTop} 
                                            onMouseOver={(e)=> setMouseOver(true)}
                                            onMouseOut={(e) => setMouseOver(false)}
                                            >
                                            {list.title}
                                        </SubMenubtn>
                                    </LinkTag>
                        })}
                    </SubMenuSection>
                </SubInner>
            </Wrapper>
            <Drawer
                title={null}
                placement={'right'}
                closable={false}
                visible={visible}
                footer={null}
                width={'100%'}
                bodyStyle={{padding:0}}
                >
                    <DrawerWrapper>
                        <DrawerMenu>
                            <DrawerClose 
                                src={mMenuClose} 
                                alt="close"
                                onClick={(e)=> {setVisible(false)}}
                            />
                        </DrawerMenu>
                        <DrawerInner>
                            <DrawerMenuList>ABOUT</DrawerMenuList>
                                <DrawerSubMenu >
                                    {submenulist.map(mlist => {
                                        return <LinkTag to={mlist.link} key={mlist.id}
                                                        onClick={(e) => {setVisible(false)}}>
                                                    <SubMenuList>{mlist.title}</SubMenuList>
                                               </LinkTag>
                                    })}          
                                </DrawerSubMenu>
                            <LinkTag to='/product' onClick={(e) => {setVisible(false)}}>
                                <DrawerMenuList>PRODUCT</DrawerMenuList>
                            </LinkTag>
                            <DrawerMenuList>SHOP</DrawerMenuList>
                            <DrawerMenuList>INQUIRY</DrawerMenuList>
                        </DrawerInner>
                        <DrawerFooter>
                            <DrawerMenuLogo src={mLogoimg3} alt="어부키친"/>
                            <DrawerFooterText>
                                COPYRIGHT 2014-2021 BY.OCEAN. ALL RIGHTS RESERVED.
                            </DrawerFooterText>
                        </DrawerFooter>
                    </DrawerWrapper>
            </Drawer>
        </>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 200px;
    position : fixed;
    top : 0;
    left : 0;
    z-index : 10;
    transition: .3s;

    @media all and (max-width:1200px) {
        height : 68px;
    }
`
const Mainmenu = styled.div`
    width : 100%;
    height : 100px;
    display : flex;
    justify-content : center;
    border-bottom : 0.5px solid ${props => props.top ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)'};
    background-color : ${props => props.top ? 'transparent' : '#ffffff'};
    @media all and (max-width:1200px) {
        height : 68px;
    }
`

const Inner = styled.div`
    width : 1200px;
    display : flex;
    justify-content : space-between;

    @media all and (max-width:1200px) {
        width : 100%;
    }
`

const LogoArea = styled.div`
    width : 154px;
    height : 100px;

    @media all and (max-width:1200px) {
        height : 68px;
        display: flex;
        align-items: center;
    }
`

const LogoImg = styled.div`
    width : 154px;
    height : 100px;
    background-image : ${(props) => (props.path === '/inquiry') 
                        ? `url(${Logoimg2});` 
                        : props.top ? `url(${Logoimg1});` :`url(${Logoimg2});`};
    background-repeat : no-repeat;
    background-size : cover;

    @media all and (max-width:1200px) {
        width : 111px;
        height : 32px;
        margin-left : 20px;

        background-image : ${(props) => (props.path === '/inquiry') 
                        ? `url(${mLogoimg2});` 
                        : props.top ? `url(${mLogoimg1});` :`url(${mLogoimg2});`};
    }
`

const SubInner = styled.div`
    display : ${props => props.subdisplay === true ? 'flex' : 'none'};
    justify-content : center;
    background-color : ${props => props.top ? 'transparent' : '#ffffff'};
`
const SubMenuSection = styled.div`
    display: flex;
    width: 800px;
    justify-content : flex-end;
`

const MenuArea = styled.div`
    display : flex;

    @media all and (max-width:1200px) {
        cursor: pointer;
        display : black;
        width : 24px;
        height : 68px;
        margin-right : 20px;
    }
`

const MMenubtn = styled.img`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
    }
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

const Menu = styled(Menubtn)`
    @media all and (max-width:1200px) {
        display : none;
    }
`

//Drawer
const DrawerWrapper = styled.div`
  width: 100%;
  height : 100vh;
  background-color : #05103d;
`
const DrawerMenu = styled.div`
    display : flex;
    justify-content : flex-end;
`
const DrawerClose = styled.img`
    cursor: pointer;
    width : 24px;
    height : 68px;
    margin-right: 20px;
`
const DrawerInner = styled.div`
    width : 100%;
    height : 81%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    color : #ffffff;
`

const DrawerMenuList = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom : 30px;

    &:first-child {
        margin-bottom : 15px;
    }
`

const DrawerSubMenu = styled.div`
    cursor: pointer;
    display : flex;
    flex-direction : column;
    align-items : center;
    transition : .5s;
`
const SubMenuList = styled.div`
    font-size: 14px;
    color: #ffffff;
    margin-bottom : 15px;
`


const DrawerFooter = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const DrawerMenuLogo = styled.img`
    height : 32px;
    margin-bottom : 10px;
`
const DrawerFooterText = styled.div`
    opacity: 0.3;
    color : #ffffff;
    font-size: 10px;
`



export default withRouter(Menubar)