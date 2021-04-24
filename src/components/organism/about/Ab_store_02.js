import React from 'react'
import styled from 'styled-components'
import ab_storeimg1 from '../../../images/ab_store_img01.png'
import ab_storeimg2 from '../../../images/ab_store_img02.png'
import ab_storeimg3 from '../../../images/ab_store_img03.png'


const Ab_store_02 = () => {
    return (
        <Wrapper>
            <Section1>
                <Inner1>
                    <Img_01 src={ab_storeimg1} alt="어부키친이야기 img1" />
                    <ContentsArea1>
                        <Title1>7년간의 노하우로<br />신선함을 고스란히</Title1>
                        <SubContents1>7년간 운영하며 얻은 노하우를 제품의<br />생산성과 품질에 최선의 노력을 기울이고 있습니다</SubContents1>
                    </ContentsArea1>
                </Inner1>
            </Section1>
            <Section2>
                <Inner2>
                    <ContentsArea2>
                        <Title2>안전한 먹거리를 위한<br />위생적인 시스템</Title2>
                        <SubContents2>항상 고객에게 안전하고 믿을 수 있는 기업이 되기 위해<br />품질에 문제가 없도록 관리를 철저히 하고 있습니다. </SubContents2>
                        <Img_02 src={ab_storeimg2} alt="어부키친이야기 img2"/>
                    </ContentsArea2>
                    <Img_03 src={ab_storeimg3} alt="어부키친이야기 img1" />
                </Inner2>
            </Section2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    /* height : 493.6vh; */
    height : 2,488px;
    display : flex;
    flex-direction : column;
    /* background : red; */
`

// Section1
const Section1 = styled.div`
    width : 100%;
    height : 750px;
    margin-top : 17.77vh;
    display : flex;
    justify-content : center;
    /* background : green; */
`
const Inner1 = styled.div`
    width : 62.5vw;
    height : 100%;
    /* background : blue; */
    display : flex;
`
const Img_01 = styled.img`
    width : 28.12vw;
    height : 100%;
    margin-left : 4.58vw;
    margin-right : 2.08vw;
`
const ContentsArea1 = styled.div`
    width : 100%;
    height : 100%;
    /* background : purple; */
    display : flex;
    flex-direction : column;
    justify-content : center;
`
const Title1 = styled.div`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.96px;
    color: #05103d;
    margin-bottom : 2.77vh;
`
const SubContents1 = styled.div`
    font-size: 20px;
    line-height: 1.7;
    letter-spacing: normal;
    color: #000000;
`

// Section2
const Section2 = styled.div`
    width : 100%;
    height : 888px;
    margin-top : 23.14vh;
    display : flex;
    justify-content : center;
    /* background : green; */
`
const Inner2 = styled.div`
    width : 62.5vw;
    height : 100%;
    display : flex;
    /* background : blue; */
`
const ContentsArea2 = styled.div`
    width : 23.02vw;
    height : 100%;
    margin-left : 4.58vw;
    margin-right : 3.70vw;
    display : flex;
    flex-direction : column;
    /* background : purple; */
`
const Title2 = styled.div`
    font-size: 43px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.96px;
    color: #05103d;
    margin-bottom : 2.77vh;
    /* background : red; */
`
const SubContents2 = styled.div`
    height : auto;
    font-size: 18px;
    line-height: 1.7;
    color: #000000;
    margin-bottom : 3.70vh;
    /* background : red; */
`

const Img_02 = styled.img`
    height : 28.51vh;
`

const Img_03 = styled.img`
    width : 28.12vw;
    height : 69.44vh;
    margin-top : 12.77vh;
`


export default Ab_store_02