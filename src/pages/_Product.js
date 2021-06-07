import React, {useEffect} from 'react'
import styled from 'styled-components'
import HeaderBackgroud from '../components/organism/HeaderBackgroud'
import Footer from '../components/organism/Footer'
import Imgbg from '../images/product_bg01-1.jpg'
import Pro_item_01 from '../components/organism/product/Pro_item_01'


const _Product = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    
    return (
        <Wrapper>
            <HeaderBackgroud img={Imgbg}>바다의 건강을<br />전하기 위한 약속</HeaderBackgroud>
            <Pro_item_01 />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width : 100%;
  height : auto;
  overflow-x : hidden;
  overflow-y : auto;
`

export default _Product