import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/organism/Footer'
import bgimg from '../images/shop_bg.png'
import mbgimg from '../images/mo_shop_bg.png'

const _Shop = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <>
            <Wrapper>
                <Inner>
                    <BackGround src={bgimg} alt="coming soon"/>
                    <MobileBackGround src={mbgimg} alt="coming soon"/>
                </Inner>
            </Wrapper>
            <Footer />
        </>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : auto;
   display : flex;
   justify-content : center;
   align-items : center;
   background : #f5f5f5;
`

const Inner = styled.div`
    width : 1200px;
    height : 100%;
    display : flex;
    align-items : center;
    margin-top : 100px;
    /* background : red; */
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
        margin : 218px 0px 150px 0px;
    }
`

const BackGround = styled.img`
    width : 1200px;
    height : 433px;
    margin : 200px 0px;

    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileBackGround = styled.img`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
    }
`

export default _Shop;