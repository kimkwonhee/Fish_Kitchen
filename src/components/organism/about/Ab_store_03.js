import React from 'react'
import styled from 'styled-components'
import Listimg1 from '../../../images/ab_store_img04.png'
import Listimg2 from '../../../images/ab_store_img05.png'
import Listimg3 from '../../../images/ab_store_img06.png'
import Listbar1 from '../../../images/ab_store_imgbar01.png'
import Listbar2 from '../../../images/ab_store_imgbar02.png'
import mListbar1 from '../../../images/mo_ab_store_imgbar01.png'
import Fade from 'react-reveal/Fade'

const Ab_store_03 = () => {
    return (
        <Wrapper>
            <Section>
                <List1>
                    <Fade delay={800} duration={2000}>
                        <Img1 src={Listimg1} alt="냉동새유류" />
                    </Fade>
                    <Fade delay={500} duration={2000}>
                        <Imgbar1 />
                    </Fade>
                    <ContentsArea1>
                        <Fade duration={2000}>
                            <ListTitle1>냉동 새우류</ListTitle1>
                            <ListSub1>생새우살, 홍새우살, 칵테일새우살 등</ListSub1>
                        </Fade>
                    </ContentsArea1>
                </List1>
                <List2>
                    <ContentsArea2>
                        <Fade duration={2000}>
                            <ListTitle2>냉동 연체류</ListTitle2>
                            <ListSub2>쭈꾸미, 낙지, 갑오징어 등</ListSub2>
                        </Fade>
                    </ContentsArea2>
                    <Fade delay={500} duration={2000}>
                        <Imgbar2 src={Listbar2} alt="리스트바" />
                    </Fade>
                    <Fade delay={800} duration={2000}>
                        <Img2 src={Listimg2} alt="냉동연체류" />
                    </Fade>
                </List2>
                <List3>
                    <Fade delay={800} duration={2000}>
                        <Img3 src={Listimg3} alt="냉동어류" />
                    </Fade>
                    <Fade delay={500} duration={2000}>
                        <Imgbar3 src={Listbar1} alt="리스트바" />
                    </Fade>
                    <ContentsArea3>
                        <Fade duration={2000}>
                            <ListTitle1>냉동 어류</ListTitle1>
                            <ListSub1>고등어, 갈치, 굴비, 도미 등</ListSub1>
                        </Fade>
                    </ContentsArea3>
                </List3>
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
    /* background : red; */
    
    @media all and (max-width:1200px) {
        width: 92%;
    }
`
// 냉동새우류
const List1 = styled.div`
    position :  absolute;
    width : 100%;
    height : 366px;
    /* background-color : blue; */

    @media all and (max-width:1200px) {
        height : 206px;
    }
`
const Img1 = styled.img`
    position : absolute;
    width : 280px;
    height : 366px;
    left : 10px;
    /* background : green; */
    @media all and (max-width:1200px) {
        width : 154px;
        height : 206px;
    }
`
const Imgbar1 = styled.div`
    position : absolute;
    width : 144px;
    height : 5px;
    background : url(${Listbar1});
    background-repeat : no-repeat;
    top : 244px;
    left : 310px;
    
    @media all and (max-width:1200px) {
        background : url(${mListbar1});
        background-repeat : no-repeat;
        width : 70px;
        height : 5px;
    }
`
const ContentsArea1 = styled.div`
    position : absolute;
    left : 446px;
    top : 228px;
    width : 310px;
    text-align : center;
    /* background : blue; */
`
const ListTitle1 = styled.div`
    font-size: 40px;
    font-weight: 500;
    line-height: 0.83;
    letter-spacing: 0.8px;
    color: #ffffff;
    margin-bottom : 12px;
    
    @media all and (max-width:1200px) {
        font-size: 16px;
    }
`
const ListSub1 = styled.div`
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: #ffffff;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
    }
`

// 냉동 연체류
const List2 = styled.div`
    position : absolute;
    /* top : 24.90vh; */
    top : 269px;
    width : 100%;
    height : 366px;
    z-index : 2;
    /* background : grey; */
`

const ContentsArea2 = styled.div`
    position : absolute;
    left : 446px;
    top : 151px;
    width : 310px;
    text-align : center;
    /* background : blue; */
`

const ListTitle2 = styled.div`
    font-size: 40px;
    font-weight: bold;
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
`

const Imgbar2 = styled.img`
    position : absolute;
    top : 168px;
    left : 728px;
    /* background : purple; */
`
const Img2 = styled.img`
    position : absolute;
    left : 892px;
    /* background : green; */
`
// 냉동어류
const List3 = styled.div`
    position : absolute;
    /* top : 47.87vh; */
    top : 503px;
    width : 100%;
    height : 326px;
    z-index : 4;
    /* background : blue; */
`

const Img3 = styled.img`
    position : absolute;
    left : 10px;
    /* background : green; */
`

const Imgbar3 = styled.img`
    position : absolute;
    top : 131px;
    left : 310px;
    /* background : purple; */
`

const ContentsArea3 = styled.div`
    position : absolute;
    left : 446px;
    top : 115px;
    width : 310px;
    text-align : center;
    /* background : blue; */
`

export default Ab_store_03