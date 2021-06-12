import React from 'react'
import styled from 'styled-components'
import company_img from '../../../images/ab_company_img09.png'
import Fade from 'react-reveal/Fade'

const Ab_company_01 = () => {
    return (
        <Wrapper>
            <Inner>
                <Fade duration={1000}>
                    <ImgArea>
                        <ImgCircle src={company_img} alt="company img"/>
                    </ImgArea>
                </Fade>
                <Fade bottom distance="10%" duration={1000}>
                    <TextArea>㈜바이오션은 주로 베트남, 중국, 인도 등의 수산물을<br />
                        직수입하여 공급하는 업체로서 올해로 경력이 7년이 되었습니다.<br />
                        주요거래처로부터 우수협력사로 선정되고 있으며, 품질, 단가, 미입<br />
                        및 상황처리 등 납품에 문제가 없도록 관리를 철저히 하고 있습니다.<br />
                        항상 고객에게 안전하고 믿을 수 있는 기업이 되고자 노력할 것입니다.
                    </TextArea>
                </Fade>
                <Fade duration={1000}>
                    <MobileTextArea>
                        <MobileText>
                            ㈜바이오션은 주로 베트남, 중국, 인도 등의<br />
                            수산물을 직수입하여 공급하는 업체로서<br />
                            올해로 경력이 7년이 되었습니다.<br /><br />
                            주요거래처로부터 우수협력사로 선정되고 있으며,<br />
                            품질, 단가, 미입 및 상황처리 등 납품에 문제가 없도록<br />
                            관리를 철저히 하고 있습니다.<br />
                            항상 고객에게 안전하고 믿을 수 있는<br />
                            기업이 되고자 노력할 것입니다.
                        </MobileText>
                    </MobileTextArea>
                </Fade>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : auto;
   display : flex;
   justify-content : center;
   align-items : center;

   @media all and (max-width:1200px) {
    }
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    display : flex;
    align-items : center;
    margin : 100px 0px;
    /* background-color : green; */
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
        margin : 60px 0px;
    }
`

const ImgArea = styled.div`
    @media all and (max-width:1200px) {
        display : flex;
        justify-content : center;
    }
`

const ImgCircle = styled.img`
    width : 400px;
    height : 400px;
    border-radius : 50%;
    
    @media all and (max-width:1200px) {
        width : 80%;
        height : auto;
        margin-bottom : 30px;
    }
`

const TextArea = styled.div`
    width : 100%;
    height : 100%;
    margin-left : 70px;
    font-size: 20px;
    line-height: 1.75;
    color: #000000;
    display : flex;
    align-items : center;
    
    @media all and (max-width:1200px) {
        display : none;
    }
`
const MobileTextArea = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
    }
`

const MobileText = styled.div`
    display : none;
    
    @media all and (max-width:1200px) {
        display : block;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #000000;
        text-align : center;
    }
`

export default Ab_company_01