import React from 'react'
import styled from 'styled-components'
import img_01 from '../../../images/ab_vision_img01.png'
import img_02 from '../../../images/ab_vision_img02.png'
import img_03 from '../../../images/ab_vision_img03.png'
import img_04 from '../../../images/ab_vision_img04.png'
import img_05 from '../../../images/ab_vision_img05.png'
import mo_img_01 from '../../../images/mo_ab_vision_img01.png'
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
                    아침 식탁에 올라갈 신선한 물고기를 잡기 위해<br />
                    어부들은 사람들이 자는 시간에도 물고기 사냥을 나섭니다.
                    </Discription>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <MODiscription>햇볕이나 비바람을 피할 수 없는 바다 한 가운데,<br/>
                    흔들리는 배 위에서 무거운 어구를 던지고<br />
                    당기는 작업을 수십 시간 동안 쉬지 않고<br/>
                    하는게 어부의 일입니다.<br /><br/>
                    아침 식탁에 올라갈 신선한 물고기를 잡기 위해<br />
                    어부들은 사람들이 자는 시간에도<br/>물고기 사냥을 나섭니다.
                    </MODiscription>
                </Fade>
            </DiscriptionArea>
            <ImgArea>
                <Fade delay={500} duration={1000}>
                    <Circle1 />
                </Fade>
                <Fade delay={700} duration={1000}>
                    <Circle2 />
                </Fade>
                <Fade delay={900} duration={1000}>
                    <Circle3 src={img_01} alt="바다"/>
                </Fade>
                <Fade delay={1100} duration={1000}>
                    <Circle4 src={img_02} alt="별빛"/>
                </Fade>
                <Fade delay={1300} duration={1000}>
                    <Circle5 src={img_03} alt="어선"/>
                </Fade>
                <Fade delay={1100} duration={1000}>
                    <Circle6 src={img_04} alt="어부"/>
                </Fade>
                <Fade delay={900} duration={1000}>
                    <Circle7 />
                </Fade>
                <Fade delay={700} duration={1000}>
                    <Circle8 src={img_05} alt="어부"/>
                </Fade>
                <Fade delay={500} duration={1000}>
                    <Circle9 />
                </Fade>
            </ImgArea>
            <Fade duration={1000}>
                <MobileBgimg src={mo_img_01} alt="mobile img"/>
            </Fade>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 1428px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* background : red; */
    
    @media all and (max-width:1200px) {
        height : auto;
    }
`
// Discription
const DiscriptionArea = styled.div`
    width : 1200px;
    /* height : 214px; */
    margin-top : 100px;
    margin-bottom : 40px;
    /* background : grey; */

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
    /* background : green; */

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
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        color: #000000;
    }
`

// Circle Area
const ImgArea = styled.div`
    position : absolute;
    width : 100%;
    height : 924px;
    margin-top : 354px;
    margin-bottom : 25px;
    overflow-x : hidden;
    
    @media all and (max-width:1200px) {
        display : none;
    }
`
const MobileBgimg = styled.img`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        margin-top : 30px;
        margin-bottom : 30px;
        width : 100%;
    }
`

const Circle1 = styled.div`
    position : absolute;
    top : 254px;
    left : 28.6px;
    width : 360px;
    height : 360px;
    border-radius : 50%;
    background : rgba(5, 16, 61, 0.04);
    /* background : green; */
`
const Circle2 = styled.div`
    position : absolute;
    top : 76px;
    left : 350px;
    width : 178px;
    height : 178px;
    border-radius : 50%;
    background : rgba(5, 16, 61, 0.2);
`
const Circle3 = styled.img`
    position : absolute;
    top : 60px;
    left : 400px;
    width : 300px;
    height : 300px;
    z-index : 2;
`
const Circle4 = styled.img`
    position : absolute;
    top : 531px;
    left : 360px;
    width : 300px;
    height : 300px;
    z-index : 2;
`
const Circle5 = styled.img`
    position : absolute;
    top : 360px;
    left : 746px;
    width : 380px;
    height : 380px;
    z-index : 2;
`
const Circle6 = styled.img`
    position : absolute;
    left : 1100px;
    width : 420px;
    height : 420px;
    z-index : 2;
`
const Circle7 = styled.div`
    position : absolute;
    top : 571px;
    left : 1240px;
    width : 260px;
    height : 260px;
    border-radius : 50%;
    background : rgba(5, 16, 61, 0.2);
`
const Circle8 = styled.img`
    position : absolute;
    top : 624px;
    left : 1260px;
    width : 300px;
    height : 300px;
    z-index : 2;
`
const Circle9 = styled.div`
    position : absolute;
    top : 254px;
    left : 1560px;
    width : 400px;
    height : 400px;
    border-radius : 50%;
    background : #05103d;
`



export default Ab_vision_01