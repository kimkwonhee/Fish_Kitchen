import React from 'react'
import styled from 'styled-components'
import company_img01 from '../../../images/ab_company_img01.jpg'
import company_img02 from '../../../images/ab_company_img02.jpg'
import company_img03 from '../../../images/ab_company_img03.jpg'

const Ab_company_02 = () => {
    return (
        <Wrapper>
            <Inner>
                <Section>
                    <TextArea>
                        <Title>세계 각국의 회사와<br />글로벌 파트너 체결</Title>
                        <Discription>7년동안 신뢰를 바탕으로 베트남, 중국, 인도, 태국 등과<br />협력하여 신선한 수산물을 공급하고 있습니다</Discription>
                    </TextArea>
                    <CompanyImg src={company_img01} />
                </Section>
                <Section>
                    <CompanyImg src={company_img02} align="right"/>
                    <TextArea>
                        <Title>A등급<br />최우수협력사 선정</Title>
                        <Discription>협력업체평가에서 최우수협력업체로 선정되었고<br />14년도에는 식약청 HACCP인증을 획득하였습니다</Discription>
                    </TextArea>  
                </Section>
                <Section>
                    <TextArea>
                        <Title>베트남<br />현지 지사 설립</Title>
                        <Discription>2016년, 베트남 호치민에 현지 지사를 설립했고<br />현지 직원을 채용하여 품질 관리를 하고 있습니다.</Discription>
                    </TextArea>
                    <CompanyImg src={company_img03} />
                </Section>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : 2226px;
   background : #f5f5f5;
   display : flex;
   align-items : center;
   justify-content : center;
`
const Inner = styled.div`
    width : 1200px;
    height : 1876px;
    /* background : red; */
`
const Section = styled.div`
    width : 100%;
    height : 492px;
    margin-bottom : 200px;
    display : flex;
    align-items : center;

    &:last-child {
        margin-bottom : 0px;
    }
    /* background : green; */
`
const TextArea = styled.div`
    width : 100%;
    height : 231px;
    /* background : red; */
`
const Title = styled.div`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.96px;
    margin-bottom : 30px;
    color: #05103d;
`
const Discription = styled.div`
    font-size: 20px;
    line-height: 1.7;
    color: #000000;
`
const CompanyImg = styled.img`
    ${props => (props.align === 'right') ? 'margin-right : 70px' : null}
`



export default Ab_company_02