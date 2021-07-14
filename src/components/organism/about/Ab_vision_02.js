import React from 'react'
import styled from 'styled-components'
import img_01 from '../../../images/ab_vision_img06.png'
import mimg_01 from '../../../images/mo_ab_vision_img02.png'
import Fade from 'react-reveal/Fade'

const Ab_vision_02 = () => {
    return (
        <Wrapper>
            <Inner>
                <Fade top distance="20%" duration={1000}>
                    <Title>바다에서 갓 잡은 신선한 물고기</Title>
                </Fade>
                <ContentArea>
                    <FishArea>
                        <Fade delay={800} duration={1000}>
                            <Img_01 src={img_01} alt="어부" />
                        </Fade>
                    </FishArea>
                    <TextArea>
                        <Fade right distance="5%" delay={1400} duration={1000}>
                            <Text><BoldText>신선한 수산물</BoldText>을 위해 태양이 지고,<br />어둠이 가득한 <BoldText>밤 바다</BoldText>를 나아가는<br/><BoldText>그들의 이야기.</BoldText></Text>
                        </Fade>
                    </TextArea>
                </ContentArea>
                <MobileContentArea>
                    <Fade delay={500} duration={1000}>
                        <MobileDesc>신선한 수산물을 위해 태양이 지고,<br />
                        어둠이 가득한 밤 바다를 나아가는 그들의 이야기.
                        </MobileDesc>
                    </Fade>
                    <Fade delay={800}duration={1000}>
                        <MobileImg1 src={mimg_01}/>
                    </Fade>
                </MobileContentArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    background : #f5f5f5;
    display : flex;
    justify-content : center;
    
    @media all and (max-width:1200px) {
        
    }
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : flex;
        flex-direction : column;
        align-items : center;
    }
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.42;
    letter-spacing: 0.96px;
    color: #000000;
    text-align : center;
    margin-top : 150px;
    margin-bottom : 80px;

    @media all and (max-width:1200px) {
        margin-top : 86px;
        font-size: 22px;
        margin-bottom : 20px;
    }
`

// ContentArea
const ContentArea = styled.div`
    width : 100%;
    display : flex;
    margin-bottom : 150px;

    @media all and (max-width:1200px) {
        display : none;
    }
`
const FishArea = styled.div`
    height : 100%;

`
const Img_01 = styled.img`
    width : 592px;
    height : 315px;
`
const TextArea = styled.div`
    display : flex;
    align-items : center;
`
const Text = styled.div`
    width : 430px;
    margin-left : 80px;
    font-size: 26px;
    line-height: 1.64;
    color: #000000;
    font-weight : 400;
`
const BoldText = styled.span`
    font-weight: 700;
    color: #05103d;
`

// mobile
const MobileContentArea = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
    }
`
const MobileDesc = styled.div`
    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #000000;
        text-align : center;
        margin-bottom : 30px;
    }
`

const MobileImg1 = styled.img`
    display : none;
    
    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
        margin-bottom : 60px;
    }
`

export default Ab_vision_02