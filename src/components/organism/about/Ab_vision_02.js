import React from 'react'
import styled from 'styled-components'
import img_01 from '../../../images/ab_vision_img06.png'
import img_02 from '../../../images/ab_vision_img07.png'

const Ab_vision_02 = () => {
    return (
        <Wrapper>
            <Inner>
                <Title>바다에서 갓 잡은 신선한 물고기</Title>
                <ContentArea>
                    <FishArea>
                        <Img_01 src={img_01} alt="어부" />
                        <Discription1>행위가 주체가되는 대상</Discription1>
                    </FishArea>
                    <PlusArea>
                        <Plus>+</Plus>
                    </PlusArea>
                    <KitchenArea>
                        <Img_01 src={img_02} alt="키친" />
                        <Discription1>행위가 이루어지는 공간</Discription1>
                    </KitchenArea>
                    <TextArea>
                        <Text><BoldText>신선한 물고기</BoldText>를 위해 태양이 지고,<br />어둠이 가득한 <BoldText>밤 바다</BoldText>를 나아가는<br/><BoldText>그들의 이야기.</BoldText></Text>
                    </TextArea>
                </ContentArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 685px;
    background : #f5f5f5;
    display : flex;
    justify-content : center;
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    margin-top : 100px;
    /* background : red; */
`

const Title = styled.div`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: 0.96px;
    color: #000000;
    text-align : center;
    margin-bottom : 80px;
`

// ContentArea
const ContentArea = styled.div`
    width : 100%;
    display : flex;
    /* background : green;  */
`
const FishArea = styled.div`
    width : 236px;
    height : 100%;
    margin-left : 100px;
    /* background : blue; */
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
    /* background : blue; */
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
    /* background : blue; */
`
const TextArea = styled.div`
    width : 100%;
    height : 300px;
    display : flex;
    align-items : center;
    /* background : blue; */
`
const Text = styled.div`
    width : 430px;
    margin-left : 60px;
    font-size: 28px;
    line-height: 1.64;
    color: #000000;
    /* background : red; */
`

const BoldText = styled.span`
    font-weight: 900;
    color: #05103d;
`

export default Ab_vision_02