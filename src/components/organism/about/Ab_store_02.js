import React from 'react'
import styled from 'styled-components'
import ab_storeimg1 from '../../../images/ab_store01.png'
import ab_storeimg2 from '../../../images/ab_store02.png'
import ab_storeimg3 from '../../../images/ab_store03.png'
import mo_ab_storeimg1 from '../../../images/mo_ab_store01.png'
import mo_ab_storeimg2 from '../../../images/mo_ab_store02.png'
import mo_ab_storeimg3 from '../../../images/mo_ab_store03.png'
import Fade from 'react-reveal/Fade'


const Ab_store_02 = () => {
    return (
        <Wrapper>
            <Section1>
                <Inner1>
                    <Fade left duration={2000}>
                        <Img_01 />
                    </Fade>
                    <ContentsArea1>
                        <Fade top duration={2000}>
                            <Title1>7년간의 노하우로<br />신선함을 고스란히</Title1>
                        </Fade>
                        <Fade delay={700} duration={2000}>
                            <SubContents1>7년간 운영하며 얻은 노하우를 제품의<br />생산성과 품질에 최선의 노력을 기울이고 있습니다</SubContents1>
                        </Fade>
                    </ContentsArea1>
                </Inner1>
            </Section1>
            <Section2>
                <Inner2>
                    <InnerOrder1>
                            <ContentsArea2>
                                <Title2>
                                    <Fade top duration={2000}>
                                        <Title2Text>
                                            안전한 먹거리를 위한<br />위생적인 시스템
                                        </Title2Text>
                                    </Fade>
                                </Title2>
                                <SubContents2>
                                    <Fade delay={700} duration={2000}>
                                        <SubContents2Text>
                                            항상 고객에게 안전하고 믿을 수 있는 기업이 되기 위해<br />품질에 문제가 없도록 관리를 철저히 하고 있습니다.
                                        </SubContents2Text>
                                    </Fade>
                                </SubContents2>
                                <Img_02>
                                    <Fade left duration={2000}>
                                        <ImgItem />
                                    </Fade>
                                </Img_02>
                            </ContentsArea2>
                    </InnerOrder1>
                    <InnerOrder2>
                        <Fade right duration={2000}>
                            <Img_03  />
                        </Fade>
                    </InnerOrder2>
                </Inner2>
            </Section2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
`

// Section1
const Section1 = styled.div`
    width : 100%;
    margin-top : 300px;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        margin-top : 60px;
    }
`
const Inner1 = styled.div`
    width : 1200px;
    display : flex;
    justify-content : center;
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
    }
`
const Img_01 = styled.div`
    width : 540px;
    height : 750px;
    background-image : url(${ab_storeimg1});
    background-repeat : no-repeat;
    margin-right : 40px;

    @media all and (max-width:1200px) {
        background-image : url(${mo_ab_storeimg1});
        background-repeat : no-repeat;
        background-size : cover;
        width : 100%;
        height : 0px;
        padding-top: calc(300 / 335 * 100%);
    }
`
const ContentsArea1 = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    
    @media all and (max-width:1200px) {
        margin-top : 20px;
        display : block;
    }
`
const Title1 = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.96px;
    color: #05103d;
    margin-bottom : 23px;
    
    @media all and (max-width:1200px) {
        margin-bottom : 10px;
        font-size: 24px;
        line-height: 1.33;
    }
`
const SubContents1 = styled.div`
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: normal;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        letter-spacing: normal;
    }
`

// Section2
const Section2 = styled.div`
    width : 100%;
    margin-top : 250px;
    margin-bottom : 300px;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        margin-top : 60px;
        margin-bottom : 60px;
    }
`
const Inner2 = styled.div`
    width : 1200px;
    height : 100%;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        flex-direction : column;
        width : 92%;
    }
`
const ContentsArea2 = styled.div`
    height : 100%;
    margin-right : 40px;
    display : flex;
    flex-direction : column;
    
    @media all and (max-width:1200px) {
        order : 2;
        width : 100%;
    }
`
const Title2 = styled.div`
    @media all and (max-width:1200px) {
        order : 1;
    }
`
const Title2Text = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.96px;
    color: #05103d;
    margin-bottom : 23px;

    @media all and (max-width:1200px) {
        order : 1;
        margin-top : 20px;
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 10px;
    }
`

const SubContents2 = styled.div`
    @media all and (max-width:1200px) {
        order : 2;
    }
`

const SubContents2Text = styled.div`
    font-size: 18px;
    line-height: 1.7;
    color: #000000;
    margin-bottom : 40px;
    @media all and (max-width:1200px) {
        font-size: 14px;
        margin-bottom : 0px;
    }
`

const Img_02 = styled.div`
    @media all and (max-width:1200px) {
        order : -1;
    }
`
const ImgItem = styled.div`
    width : 442px;
    height : 308px;
    background-image : url(${ab_storeimg2});
    background-repeat : no-repeat;
    
    @media all and (max-width:1200px) {
        order : -1;
        background-image : url(${mo_ab_storeimg2});
        background-repeat : no-repeat;
        background-size : cover;
        width : 100%;
        height : 0px;
        padding-top: calc(300 / 335 * 100%);
    }
`

const Img_03 = styled.div`
    width : 540px;
    height : 750px;
    margin-top : 138px;
    background-image : url(${ab_storeimg3});
    background-repeat : no-repeat;

    @media all and (max-width:1200px) {
        margin-top : 0px;
        margin-bottom : 10px;
        background-image : url(${mo_ab_storeimg3});
        background-repeat : no-repeat;
        background-size : cover;
        width : 100%;
        height : 0px;
        padding-top: calc(300 / 335 * 100%);
    }
`

const InnerOrder1 = styled.div`
    @media all and (max-width:1200px) {
        order : 2;
    }
`
const InnerOrder2 = styled.div`
    @media all and (max-width:1200px) {
        order : 1;
    }
`

export default Ab_store_02