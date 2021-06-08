import React, {useEffect} from 'react'
import styled from 'styled-components'
import HeaderBackgroud from '../components/organism/HeaderBackgroud'
import Footer from '../components/organism/Footer'
import Imgbg from '../images/ab_history_bg01-1.jpg'
import mImgbg from '../images/mo_ab_history_bg01.png'
import Ab_history_01 from '../components/organism/about/Ab_history_01'

const _About_history = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <Wrapper>
            <HeaderBackgroud 
                img={Imgbg}
                moimg={mImgbg}>
                    바이오션의<br />히스토리를 소개합니다
            </HeaderBackgroud>
            <Ab_history_01 />
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

export default _About_history