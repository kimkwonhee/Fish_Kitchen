import React from 'react'
import styled from 'styled-components'
import Listimg1 from '../../../images/ab_store_img04.png'
import Listimg2 from '../../../images/ab_store_img05.png'
import Listimg3 from '../../../images/ab_store_img06.png'
import Listbar1 from '../../../images/ab_store_imgbar01.png'
import Listbar2 from '../../../images/ab_store_imgbar02.png'
import MListimg1 from '../../../images/mo_ab_store_img04.png'
import MListimg2 from '../../../images/mo_ab_store_img05.png'
import MListimg3 from '../../../images/mo_ab_store_img06.png'

import Fade from 'react-reveal/Fade'

const Ab_store_03 = () => {
    return (
        <Wrapper>
            <Section>
                <List1>
                    <Fade duration={1000}>
                        <Img1 src={Listimg1} alt="냉동새유류" />
                    </Fade>
                    <Fade delay={500} duration={1000}>
                        <Imgbar1 src={Listbar1} alt="리스트바"/>
                        <ContentsArea1>
                                <ListTitle1>냉동 새우류</ListTitle1>
                                <ListSub1>생칵테일새우살, 생새우살, 자숙새우살, 칵테일새우살, 홍새우살 등</ListSub1>
                        </ContentsArea1>
                    </Fade>
                </List1>
                <MList1>
                    <Fade delay={500} duration={1000}>
                        <MListItem src={MListimg1} alt="냉동새우류"/>
                    </Fade>
                </MList1>
                <List2>
                    <Fade delay={500} duration={1000}>
                        <ContentsArea2>
                            <ListTitle2>냉동 연체류</ListTitle2>
                            <ListSub2>주꾸미, 낙지, 갑오징어, 오징어 등</ListSub2>
                        </ContentsArea2>
                        <Imgbar2 src={Listbar2} alt="리스트바" />
                    </Fade>
                    <Fade duration={1000}>
                        <Img2 src={Listimg2} alt="냉동연체류" />
                    </Fade>
                </List2>
                <MList2>
                    <Fade delay={500} duration={1000}>
                        <MListItem src={MListimg2} alt="냉동연채류"/>
                    </Fade>
                </MList2>
                <List3>
                    <Fade duration={1000}>
                        <Img3 src={Listimg3} alt="냉동어류" />
                    </Fade>
                    <Fade delay={500} duration={1000}>
                        <Imgbar3 src={Listbar1} alt="리스트바" />
                        <ContentsArea3>
                            <ListTitle1>냉동 어류</ListTitle1>
                            <ListSub1>가자미, 고등어, 동태 등</ListSub1>
                        </ContentsArea3>
                    </Fade>
                </List3>
                <MList3>
                    <Fade delay={500} duration={1000}>
                        <MListItem src={MListimg3} alt="냉동어류"/>
                    </Fade>
                </MList3>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    padding : 148px 0px;
    display : flex;
    justify-content : center;
    align-items : center;
    background : #05103d;

    @media all and (max-width:1200px) {
        padding : 60px 0px;
    }
`
const Section = styled.div`
    position : relative;
    width: 1200px;
    height : 829px;
    
    @media all and (max-width:1200px) {
        width: 92%;
        height : auto;
    }
`
// 냉동새우류
const List1 = styled.div`
    position :  absolute;
    width : 100%;
    height : 366px;

    @media all and (max-width:1200px) {
        display : none;
    }
`
const MList1 = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        margin-bottom : 30px;
    }
`
const MListItem = styled.img`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
    }
`

const Img1 = styled.img`
    position : absolute;
    width : 280px;
    height : 366px;
    left : 10px;
    
`
const Imgbar1 = styled.img`
    position : absolute;
    top : 244px;
    left : 310px;
    
`
const ContentsArea1 = styled.div`
    position : absolute;
    left : 446px;
    top : 228px;
    width : 310px;
    text-align : center;

`
const ListTitle1 = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 0.83;
    letter-spacing: 0.8px;
    color: #ffffff;
    margin-bottom : 12px;
    
`
const ListSub1 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: #ffffff;
    font-weight : 300px;
    word-break : keep-all;
`

// 냉동 연체류
const List2 = styled.div`
    position : absolute;
    top : 269px;
    width : 100%;
    height : 366px;
    z-index : 2;

    @media all and (max-width:1200px) {
        display : none;  
    }
`

const MList2 = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        margin-bottom : 30px;
    }
`

const ContentsArea2 = styled.div`
    position : absolute;
    left : 446px;
    top : 151px;
    width : 310px;
    text-align : center;
`
const ListTitle2 = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 0.83;
    letter-spacing: 0.8px;
    color: #ffffff;
    margin-bottom : 12px;
`
const ListSub2 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: #ffffff;
    font-weight : 300px;
`
const Imgbar2 = styled.img`
    position : absolute;
    top : 168px;
    left : 728px;
`
const Img2 = styled.img`
    position : absolute;
    left : 892px;
`
// 냉동어류
const List3 = styled.div`
    position : absolute;
    top : 503px;
    width : 100%;
    height : 326px;
    z-index : 4;
    
    @media all and (max-width:1200px) {
        display : none;  
    }
`

const MList3 = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
    }
`
const Img3 = styled.img`
    position : absolute;
    left : 10px;
`
const Imgbar3 = styled.img`
    position : absolute;
    top : 131px;
    left : 310px;
`
const ContentsArea3 = styled.div`
    position : absolute;
    left : 446px;
    top : 115px;
    width : 310px;
    text-align : center;
`

export default Ab_store_03