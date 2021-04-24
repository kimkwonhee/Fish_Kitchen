import React from 'react'
import styled from 'styled-components'
import Ab_store_01 from '../components/organism/about/Ab_store_01'
import Ab_store_02 from '../components/organism/about/Ab_store_02'
import Ab_store_03 from '../components/organism/about/Ab_store_03'
import Footer from '../components/organism/Footer'

const _About_store = () => {
    return (
        <Wrapper>
            <Ab_store_01 />
            <Ab_store_02 />
            <Ab_store_03 />
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


export default _About_store