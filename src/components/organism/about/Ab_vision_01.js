import React from 'react'
import styled from 'styled-components'
import mo_img_01 from '../../../images/mo_ab_vision_img01.png'
import img_01 from '../../../images/ab_vision_img01.png'
import Fade from 'react-reveal/Fade'

const Ab_vision_01 = () => {
    return (
        <Wrapper>
            <DiscriptionArea>
                <Fade top distance="20%" duration={1000}>
                    <Title>BRAND STORY</Title>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <Discription>햇볕이나 비바람을 피할 수 없는 바다 한 가운데, 흔들리는 배 위에서<br />
                                 무거운 어구를 던지고 당기는 작업을 수십 시간 동안 쉬지 않고 하는게 어부의 일입니다.<br />
                                 아침 식탁에 올라갈 신선한 수산물을 잡기 위해 어부들은 사람들이 자는 시간에도 물고기 사냥을 나섭니다.
                    </Discription>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <MODiscription>햇볕이나 비바람을 피할 수 없는 바다 한 가운데,<br />
                    흔들거리는 배 위에서, 무거운 어구를 던지고<br />
                    당기는 작업을 수십 시간 동안 쉬지 않고<br />
                    하는게 어부의 일입니다.<br /><br />
                    아침 식탁에 올라갈 신선한 물고기를 잡기 위해<br />
                    어부들은 사람들이 자는 시간에도 <br />
                    물고기 사냥을 나섭니다.<br />
                    </MODiscription>
                </Fade>
            </DiscriptionArea>
            <ImgArea1>
                <Fade delay={500} duration={1000}>
                    <Visionimg src={img_01} alt="discription img"/>
                </Fade>
            </ImgArea1>
            <ImgArea2>
                <Fade duration={1000}>
                    <MobileBgimg src={mo_img_01} alt="mobile img"/>
                </Fade>
                <Fade duration={1000}>
                <MobileSubText>별빛이 빛나는 밤하늘 속<br />바다 위에 떠있는 어선</MobileSubText>
                </Fade>
            </ImgArea2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    
    @media all and (max-width:1200px) {
        height : auto;
    }
`
// Discription
const DiscriptionArea = styled.div`
    width : 1200px;
    margin-top : 100px;
    margin-bottom : 40px;

    @media all and (max-width:1200px) {
        width : 92%;
        margin-top : 60px;
        margin-bottom : 0px;
    }
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 900;
    line-height: 1.42;
    color: #05103d;
    margin-bottom : 25px;

    @media all and (max-width:1200px) {
        font-size: 22px;
        font-weight: 900;
        line-height: 1.33;
        text-align : center;
        margin-bottom : 20px;
        color: #05103d;
    }
`
const Discription = styled.div`
    font-size: 18px;
    line-height: 1.7;
    color: #000000;

    @media all and (max-width:1200px) {
        display : none;
    }
`
const MODiscription = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
        color: #000000;
        
    }
`

// Circle Area
const ImgArea1 = styled.div`
    width : 1200px;
    margin-top : 120px;
    margin-bottom : 150px;
    overflow-x : hidden;
    
    @media all and (max-width:1200px) {
        display : none;
    }
`

const ImgArea2 = styled.div`
    display : none;
    
    @media all and (max-width:1200px) {
        display : block;    
        width : 92%;
        margin-top : 60px;
        margin-bottom : 60px;
        overflow-x : hidden;
        /* background-color : red; */
    }
`

const MobileBgimg = styled.img`
    display : none;
    @media all and (max-width:1200px) {
        display : block;
        width : 100%;
        margin-bottom : 33px;
    }
`
const MobileSubText = styled.div`
    display : none;
    @media all and (max-width:1200px) {
        display : block;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.57;
        text-align : center;
    }
`


const Visionimg = styled.img`
    width : 100%;
    height : 344px;
`



export default Ab_vision_01