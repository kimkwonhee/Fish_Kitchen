import React, {useEffect} from 'react'
import styled from 'styled-components'
import Footer from '../components/organism/Footer'
import { withRouter } from 'react-router-dom'

const _Policy = ({history}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <Wrapper>
            <Inner>
                <DataSection>
                    <PolicyTitle>개인정보 수집 및 이용</PolicyTitle>
                    <Hline />
                    <PolicyDesc>
                        ㈜바이오션(이하 "회사"라 합니다)은 서비스 이용시 이용자로부터 아래와 같은 개인 정보를 수집하고 있습니다. 이용자는 본 개인정보 수집·이용 동의서에 따른 동의 시, '필요한 최소한의 정보 외에 개인정보' 수집·이용에 동의 하지 아니할 권리가 있습니다. 개인정보 취급 및 처리에 대한 상세한 사항은 사이트 하단에 공개한 '개인정보 처리방침'을 참조하십시오. 다만, 본 동의서 내용과 상충되는 부분은 본 동의서의 내용이 우선합니다.
                    </PolicyDesc>
                    <ListSection>
                        <ListTitle>1. 수집하는 개인정보의 항목 및 이용목적</ListTitle>
                        <ListSubTitle>회사는 다음과 같은 항목들을 수집하여 처리합니다.</ListSubTitle>
                        <ListDesc>- 필수항목 : 회사명, 담당자명, 연락처, 이메일<br />
                                - 선택항목 : 부서, 직책
                        </ListDesc>
                        <ListDesc2>
                                ※ 귀하께서는 필수항목 수집·이용에 대한 동의를 거부하실 수 있으나, 이는 프로젝트 문의 기능을 위해<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;필수적으로 수집해야 하는 정보이므로, 동의를 거부하실 경우, 해당 기능을 사용하실 수 없습니다.
                        </ListDesc2>
                        <MobileListDesc2>
                            ※ 귀하께서는 필수항목 수집·이용에 대한 동의를 거부하실 수 있으나, 이는 프로젝트 문의 기능을 위해 필수적으로 수집해야 하는 정보이므로, 동의를 거부하실 경우, 해당 기능을 사용하실 수 없습니다.
                        </MobileListDesc2>
                    </ListSection>
                    <ListSection>
                        <ListTitle>2. 개인정보의 수집 및 이용목적</ListTitle>
                        <ListSubTitle>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</ListSubTitle>
                        <ListDesc>- 프로젝트 의뢰 문의 응대 : 프로젝트 의뢰 및 관련 문의에 대한 응대</ListDesc>
                    </ListSection>
                    <ListSection>
                        <ListTitle>3. 개인정보의 보유 및 이용기간</ListTitle>
                        <ListSubTitle2>
                                    회원의 개인정보는 원칙적으로 문의 접수일로부터 3개월 후 지체 없이 파기 합니다.<br />
                                    다만, 회사는 관련법령의 규정에 의하여 개인정보를 보유할 필요가 있는 경우, 해당 법령에서 정한 바에 의하여<br />
                                    아래와 같이 개인정보를 보유할 수 있습니다.
                        </ListSubTitle2>
                        <MobileListSubTitle2>
                            회원의 개인정보는 원칙적으로 문의 접수일로부터 3개월 후 지체 없이 파기 합니다. 다만, 회사는 관련법령의 규정에 의하여 개인정보를 보유할 필요가 있는 경우, 해당 법령에서 정한 바에 의하여 아래와 같이 개인정보를 보유할 수 있습니다.
                        </MobileListSubTitle2>
                        <ListDesc>- 계약 또는 청약철회 등에 관련 기록 : 5년<br />
                                  - 대금결제 및 재화 등의 공급에 관한 기록 : 5년<br />
                                  - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br />
                                  - 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년<br />
                                  - 표시/광고에 관한 기록 : 6개월<br />
                                  - 이용자의 인터넷 등 로그기록/ 이용자의 접속지 추적자료 : 3개월<br />
                                  - 그 외의 통신사실 확인 자료 : 12개월
                        </ListDesc>
                    </ListSection>
                    <GoBackBtnArea>
                        <GoBackbtn onClick={(e) => {history.goBack()}}>
                            <BackText>이전으로 돌아가기</BackText>
                        </GoBackbtn>
                    </GoBackBtnArea>
                </DataSection>
            </Inner>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width : 100%;
   height : auto;
   display : flex;
   flex-direction : column;
   align-items : center;
`

const Inner = styled.div`
    width : 1200px;
    height : auto;
    display : flex;
    align-items : center;
    margin-top : 245px;
    /* background-color : grey; */
    
    @media all and (max-width:1200px) {
        width : 92%;
        display : block;
        margin-top : 128px;
    }
`

const DataSection = styled.div`
    /* background : red; */
    width : 100%;
    padding : 0px 110px;
    
    @media all and (max-width:1200px) {
        padding : 0px 0px;
    }
`
const PolicyTitle = styled.div`
    font-size: 48px;
    font-weight: bold;
    line-height: 1.58;
    color: #05103d;
    margin-bottom : 72px;

    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 29.5px;
    }
`

const Hline = styled.div`
    width : 100%;
    height : 2px;
    background-color : #000000;
    margin-bottom : 59px;
    
    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 39.5px;
    }
`

const PolicyDesc = styled.div`
    font-size: 20px;
    line-height: 1.9;
    color: #000000;
    word-break : keep-all;
    margin-bottom : 60px;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
        margin-bottom : 40px;
    }
`

const ListSection = styled.div`
    margin-bottom : 60px;
    
    @media all and (max-width:1200px) {
        margin-bottom : 40px;
    }
`
const ListTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    line-height: 1.9;
    color: #000000;
    margin-bottom : 40px;

    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.57;
        margin-bottom : 12px;
    }
`
const ListSubTitle = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.9;
    color: #000000;
    margin-left : 23px;
    margin-bottom : 20px;
    
    @media all and (max-width:1200px) {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        margin-left : 0px;
        margin-bottom : 12px;
    }
`

const ListSubTitle2 = styled.div`
    font-size: 20px;
    font-weight: 500;
    line-height: 1.9;
    color: #000000;
    margin-left : 23px;
    margin-bottom : 20px;
    
    @media all and (max-width:1200px) {
        display : none;
    }
`
const MobileListSubTitle2 = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        color: #000000;
        margin-bottom : 12px;
    }
`

const ListDesc = styled.div`
    font-size: 20px;
    line-height: 1.9;
    color: #555555;
    margin-left : 23px;

    @media all and (max-width:1200px) {
        font-size: 12px;
        font-weight: normal;
        line-height: 1.5;
        color: #000000;
        margin-left : 0px;
    }
`

const ListDesc2 = styled.div`
    margin-top : 20px;
    font-size: 20px;
    line-height: 1.9;
    color: #555555;
    margin-left : 23px;

    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileListDesc2 = styled.div`
    display : none;
    @media all and (max-width:1200px) {
        display : block;
        margin-top : 12px;
        font-size: 10px;
        font-weight: normal;
        line-height: normal;
        color: #000000;
    }
`

const GoBackBtnArea = styled.div`
    margin-top : 90px;
    width : 100%;
    display : flex;
    justify-content : center;
    margin-bottom : 150px;

    @media all and (max-width:1200px) {
        margin-top : 50px;
        margin-bottom : 60px;
    }
`
const GoBackbtn = styled.div`
    cursor: pointer;
    width : 240px;
    height : 56px;
    border : 1px solid #c1c1c1;
    display : flex;
    align-items : center;
    justify-content : center;
    color: #c1c1c1;
    border-radius: 5px;
    transition : .5s;

    &:hover {
        background : #05103d;
        color: #ffffff;
    }

    @media all and (max-width:1200px) {
        width : 100%;
        height : 48px;
    }
`

const BackText = styled.div`
    font-size: 18px;
    line-height: 2.17;
    
    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: bold;
    }
`





export default withRouter(_Policy)