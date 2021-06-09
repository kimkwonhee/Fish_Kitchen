import React from 'react'
import styled from 'styled-components'
import img_01 from '../../../images/ab_vision_img06.png'
import img_02 from '../../../images/ab_vision_img07.png'
import mimg_01 from '../../../images/mo_ab_vision_img02.png'
import Fade from 'react-reveal/Fade'

const Ab_vision_02 = () => {
    return (
        <Wrapper>
            <Inner>
                <Fade top duration={2000}>
                    <Title>바다에서 갓 잡은 신선한 물고기</Title>
                </Fade>
                <ContentArea>
                    <FishArea>
                        <Fade delay={800} duration={2000}>
                            <Img_01 src={img_01} alt="어부" />
                            <Discription1>행위가 주체가되는 대상</Discription1>
                        </Fade>
                    </FishArea>
                    <PlusArea>
                        <Fade delay={1500} duration={2000}>
                            <Plus>+</Plus>
                        </Fade>
                    </PlusArea>
                    <KitchenArea>
                        <Fade delay={2000} duration={2000}>
                            <Img_01 src={img_02} alt="키친" />
                            <Discription1>행위가 이루어지는 공간</Discription1>
                        </Fade>
                    </KitchenArea>
                    <TextArea>
                    <Fade right delay={2000} duration={2000}>
                        <Text><BoldText>신선한 물고기</BoldText>를 위해 태양이 지고,<br />어둠이 가득한 <BoldText>밤 바다</BoldText>를 나아가는<br/><BoldText>그들의 이야기.</BoldText></Text>
                    </Fade>
                    </TextArea>
                </ContentArea>
                <MobileContentArea>
                    <Fade delay={700} duration={2000}>
                        <MobileDesc>신선한 물고기를 위해 태양이 지고,<br />
                        어둠이 가득한 밤 바다를 나아가는<br />
                        그들의 이야기.
                        </MobileDesc>
                    </Fade>
                    <Fade delay={1200}duration={2000}>
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
    font-size: 48px;
    font-weight: 600;
    line-height: 1.42;
    letter-spacing: 0.96px;
    color: #000000;
    text-align : center;
    margin-top : 100px;
    margin-bottom : 80px;

    @media all and (max-width:1200px) {
        margin-top : 86px;
        font-size: 20px;
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
    width : 236px;
    height : 100%;
    margin-left : 100px;
`
const Img_01 = styled.img`
    width : 236px;
    height : 246px;
    margin-bottom : 20px;
`
const Discription1 = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6;
    text-align: center;
    color: #05103d;
`
const PlusArea = styled.div`
    width : 120px;
`
const Plus = styled.div`
    font-size : 50px;
    color : #05103d;
    text-align : center;
    margin-top : 80px;
`
const KitchenArea = styled.div`
    width : 236px;
    height : 100%;
`
const TextArea = styled.div`
    width : 100%;
    height : 300px;
    display : flex;
    align-items : center;
`
const Text = styled.div`
    width : 430px;
    margin-left : 60px;
    font-size: 28px;
    line-height: 1.64;
    color: #000000;
`
const BoldText = styled.span`
    font-weight: 900;
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
        font-size: 16px;
        font-weight: 500;
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