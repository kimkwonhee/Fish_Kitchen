import React from 'react'
import styled from 'styled-components'
import company_img from '../../../images/ab_store01.png'

const Ab_company_01 = () => {
    return (
        <Wrapper>
            <Inner>
                <ImgCircle />
                <TextArea>㈜바이오션은 주로 베트남, 중국, 인도 등의 수산물을<br />
                직수입하여 공급하는 업체로서 올해로 경력이 7년이 되었습니다.<br />
                주요거래처로부터 우수협력사로 선정되고 있으며,<br />
                품질, 단가, 미입 및 상황처리 등 납품에 문제가 없도록<br />
                관리를 철저히 하고 있습니다.<br />
                항상 고객에게 안전하고 믿을 수 있는 기업이 되고자<br />
                노력할 것입니다.</TextArea>
            </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : 750px;
   display : flex;
   justify-content : center;
   align-items : center;
   /* background : red; */
`

const Inner = styled.div`
    width : auto;
    height : 500px;
    display : flex;
    /* background-color : grey; */
`

const ImgCircle = styled.div`
    width : 500px;
    height : 500px;
    border-radius : 50%;
    background : url(${company_img});
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center center;
    /* background-color : green; */
`

const TextArea = styled.div`
    width : 630px;
    height : 100%;
    margin-left : 70px;
    font-size: 22px;
    line-height: 1.75;
    color: #000000;
    display : flex;
    align-items : center;
    /* background : green; */
`

export default Ab_company_01