import React, {useEffect} from 'react'
import styled from 'styled-components'
import Footer from '../components/organism/Footer'
import Inquiry_01 from '../components/organism/inquiry/Inquiry_01'


const _Inquiry = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    
    return (
        <Wrapper>
            <Inquiry_01 />
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

export default _Inquiry