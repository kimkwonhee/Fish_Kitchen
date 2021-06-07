import React, {useEffect} from 'react'
import styled from 'styled-components'
import HeaderBackgroud from '../components/organism/HeaderBackgroud'
import Footer from '../components/organism/Footer'
import Imgbg from '../images/ab_company_bg01-1.jpg'
import Ab_company_01 from '../components/organism/about/Ab_company_01'
import Ab_company_02 from '../components/organism/about/Ab_company_02'
import Ab_company_03 from '../components/organism/about/Ab_company_03'

const _About_company = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    
    return (
        <Wrapper>
            <HeaderBackgroud img={Imgbg}>소비자의 건강을 위해<br />매일 신선하고 안전한 식재료를 공급합니다.</HeaderBackgroud>
            <Ab_company_01 />
            <Ab_company_02 />
            <Ab_company_03 />
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

export default _About_company