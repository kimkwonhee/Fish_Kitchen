import React, {useEffect} from 'react'
import styled from 'styled-components'
import HeaderBackgroud from '../components/organism/HeaderBackgroud'
import Ab_vision_01 from '../components/organism/about/Ab_vision_01'
import Ab_vision_02 from '../components/organism/about/Ab_vision_02'
import Footer from '../components/organism/Footer'
import Imgbg from '../images/ab_vision_bg01-1.jpg'
import mImgbg from '../images/mo_ab_vision_bg01.png'

const _About_vision = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <Wrapper>
            <HeaderBackgroud 
                img={Imgbg} 
                moimg={mImgbg}
                >
                    어부漁父<br/>물고기를 잡는 것을 업으로 사는 사람들.
            </HeaderBackgroud>
            <Ab_vision_01 />
            <Ab_vision_02 />
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

export default _About_vision