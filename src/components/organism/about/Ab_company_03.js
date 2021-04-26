import React from 'react'
import styled from 'styled-components'
import company_img01 from '../../../images/ab_company_img04.png'
import company_img02 from '../../../images/ab_company_img05.png'
import company_img03 from '../../../images/ab_company_img06.png'
import company_img04 from '../../../images/ab_company_img07.png'
import company_img05 from '../../../images/ab_company_img08.png'

const Ab_company_03 = () => {

    const imglist = [
        {   
            id : 1,
            company : '삼성웰스토리',
            img : company_img01 
        },
        {   
            id : 2,
            company : '현대그린푸드',
            img : company_img02 
        },
        {   
            id : 3,
            company : '신세계 푸드',
            img : company_img03 
        },
        {   
            id : 4,
            company : '동원홈푸드', 
            img : company_img04 
        },
        {   
            id : 5,
            company : '쿠팡',
            img : company_img05 
        },
    ]
    return (
        <Wrapper>
            <Inner>
                <Title>PARTNERS</Title>
                <SubTitle>바이오션은 서로 신뢰하며 파트너사와 함께합니다</SubTitle>
                <LogoArea>
                    {imglist.map((logo) => <img key={logo.id} src={logo.img} alt={logo.company}/>)}
                </LogoArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : 445px;
   display : flex;
   justify-content : center;
   /* background : red; */
`

const Inner = styled.div`
    width : 1200px;
    height : 345px;
    margin-top : 100px;
    /* background : green; */
`
const Title = styled.div`
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    color: #000000;
    margin-bottom : 12px;
`

const SubTitle = styled.div`
    font-size: 24px;
    text-align: center;
    color: #000000;
    margin-bottom : 100px;
`

const LogoArea = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;
    /* background : grey; */
`

export default Ab_company_03