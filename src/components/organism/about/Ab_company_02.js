import React from 'react'
import styled from 'styled-components'
import company_img01 from '../../../images/ab_company_img01.jpg'
import company_img02 from '../../../images/ab_company_img02.jpg'
import company_img03 from '../../../images/ab_company_img03.jpg'
import mo_company_img01 from '../../../images/mo_ab_company_img01.png'
import mo_company_img02 from '../../../images/mo_ab_company_img02.png'
import mo_company_img03 from '../../../images/mo_ab_company_img03.png'
import Fade from 'react-reveal/Fade'

const Ab_company_02 = () => {
    return (
        <Wrapper>
            <Inner>
                <Section>
                    <Fade duration={1000}>
                        <MobileCompanyImg src={mo_company_img01} alt="company img1"/>
                    </Fade>
                    <TextArea>
                        <Fade top distance="20%" duration={1000}>
                            <Title>세계 각국의 회사와<br />글로벌 파트너 체결</Title>
                        </Fade>
                        <Fade delay={500} duration={1000}>
                            <Discription>7년동안 신뢰를 바탕으로 베트남, 중국, 인도, 태국 등과<br />협력하여 신선한 수산물을 공급하고 있습니다</Discription>
                        </Fade>
                    </TextArea>
                    <Fade right distance="8%" duration={1000}>
                        <CompanyImg src={company_img01} alt="company img1"/>
                    </Fade>
                </Section>
                <Section>
                    <Fade duration={1000}>
                        <MobileCompanyImg src={mo_company_img02} alt="company img2"/>
                    </Fade>
                    <Fade left distance="8%" duration={1000}>
                        <CompanyImg src={company_img02} alt="company img2" align="right"/>
                    </Fade>
                    <TextArea>
                        <Fade top distance="20%" duration={1000}>
                            <Title>A등급<br />최우수협력사 선정</Title>
                        </Fade>
                        <Fade delay={500} duration={1000}>
                            <Discription>협력업체평가에서 최우수협력업체로 선정되었고<br />14년도에는 식약청 HACCP인증을 획득하였습니다</Discription>
                        </Fade>
                    </TextArea>  
                </Section>
                <Section>
                    <Fade duration={1000}>
                        <MobileCompanyImg src={mo_company_img03} alt="company img3"/>
                    </Fade>
                    <TextArea>
                        <Fade top distance="20%" duration={1000}>
                            <Title>베트남<br />현지 지사 설립</Title>
                        </Fade>
                        <Fade delay={500} duration={1000}>
                            <Discription>2016년, 베트남 호치민에 현지 지사를 설립했고<br />현지 직원을 채용하여 품질 관리를 하고 있습니다.</Discription>
                        </Fade>
                    </TextArea>
                    <Fade right distance="8%" duration={1000}>
                        <CompanyImg src={company_img03} alt="company img3"/>
                    </Fade>
                </Section>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    padding : 150px 0px;
    background : #f5f5f5;
    display : flex;
    align-items : center;
    justify-content : center;

    @media all and (max-width:1200px) {
        padding : 60px 0px;
    }
`
const Inner = styled.div`
    width : 1200px;
    height : auto;

    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
    }
`
const Section = styled.div`
    width : 100%;
    height : auto;
    margin-bottom : 200px;
    display : flex;
    align-items : center;
    /* background-color : red; */

    &:last-child {
        margin-bottom : 0px;
    }

    @media all and (max-width:1200px) {
        display : block;
        margin-bottom : 60px;
    }
`
const TextArea = styled.div`
    width : 100%;
    height : auto;
    /* background : green; */
    
    @media all and (max-width:1200px) {

    }
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.96px;
    margin-bottom : 23px;
    color: #05103d;

    @media all and (max-width:1200px) {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.33;
        margin-bottom : 10px;
    }
`
const Discription = styled.div`
    font-size: 18px;
    line-height: 1.7;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
    }
`
const CompanyImg = styled.img`
    width : 680px;
    height : 492px;
    ${props => (props.align === 'right') ? 'margin-right : 70px' : null};

    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileCompanyImg = styled.img`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
        margin-bottom : 20px;
    }
`



export default Ab_company_02