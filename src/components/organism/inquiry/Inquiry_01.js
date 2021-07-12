import React, { useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import Inquirybtn from '../../atom/Inquirybtn'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';

const Inquiry_01 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalWidth, setModalWidth] = useState(400);

    const subjectRef = useRef();
    const positionRef = useRef();
    const telRef = useRef();
    const emailRef = useRef();
    const companyRef = useRef();
    const contentsRef = useRef();
    const checkboxRef = useRef();

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const eamilSend = (e) => {
        let subject = subjectRef.current.value;
        let position = positionRef.current.value;
        let tel = telRef.current.value;
        let eamil = emailRef.current.value;
        let company = companyRef.current.value;
        let detailcontents = contentsRef.current.value;
        let check = checkboxRef.current.checked;

        if (subject === '') {
            setModalText('제목을 입력해주세요');
            setIsModalVisible(true);
            subjectRef.current.focus();
        } else if(position === '') {
            setModalText('담당자명 / 직책을 입력해주세요');
            setIsModalVisible(true);
            positionRef.current.focus();
        } else if(tel === '') {
            setModalText('연락처를 입력해주세요');
            setIsModalVisible(true);
            telRef.current.focus();
        } else if(eamil === '') {
            setModalText('이메일을 입력해주세요');
            setIsModalVisible(true);
            emailRef.current.focus();
        } else if(company === '') {
            setModalText('회사명을 입력해주세요');
            setIsModalVisible(true);
            companyRef.current.focus();
        } else if(detailcontents === '') {
            setModalText('상세 문의 내용을 입력해주세요');
            setIsModalVisible(true);
            contentsRef.current.focus();
        } else if(check === false) {
            setModalText('개인정보밤침에 동의해주세요');
            setIsModalVisible(true);
        }
        else {
            window.location = 'mailto:director@fisherskitchen.co.kr?body='
            + '제목 : '+ subject +'%0D%0A'
            + '담당자명/직책 : '+ position +'%0D%0A'
            + '연락처 : '+ tel +'%0D%0A'
            + '이메일 : '+ eamil +'%0D%0A'
            + '회사명 : '+ company +'%0D%0A'
            + '상세 문의 내용 : '+ detailcontents
            + '&subject='+ subject;
            
            subjectRef.current.value = '';
            positionRef.current.value = '';
            telRef.current.value = '';
            emailRef.current.value = '';
            companyRef.current.value = '';
            contentsRef.current.value = '';
            checkboxRef.current.checked = false;
        }
    }

    const handleResize = () => {
        if ( window.innerWidth < 1200) {
            setModalWidth(window.innerWidth*0.90);
        } else {
            setModalWidth(400);
        }
    }
      
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
          window.removeEventListener('resize', handleResize);
        }
    }, []);
    
   
    return (
        <>
            <Wrapper>
                <InquiryTextArea>
                    <IqTitle>언제든지 문의해주세요.</IqTitle>
                    <IqContents1>유관 부서 검토 후 1주일 이내로 연락 드리겠습니다.</IqContents1>
                    <IqContents2>문의 메일 : director@fisherskitchen.co.kr </IqContents2>
                </InquiryTextArea>
                <DetailArea>
                    <Section>
                        <InquiryInput>
                            <Title>제목</Title>
                            <Input type="text" ref={subjectRef} />
                        </InquiryInput>
                        <InquiryInput>
                            <Title>담당자명 / 직책</Title>
                            <Input type="text" ref={positionRef}/>
                        </InquiryInput>
                        <InquiryInput>
                            <Title>연락처</Title>
                            <Input type="text" ref={telRef}/>
                        </InquiryInput>
                        <InquiryInput>
                            <Title>이메일</Title>
                            <Input type="text" ref={emailRef}/>
                        </InquiryInput>
                        <InquiryInput>
                            <Title>회사명</Title>
                            <Input type="text" ref={companyRef}/>
                        </InquiryInput>
                    </Section>
                    <Section>
                        <TextArea>
                            <TextAreaText>상세 문의 내용</TextAreaText>
                            <TextBox type="text" ref={contentsRef}/>
                        </TextArea>
                        <CheckBoxArea>
                            <input type="checkbox" ref={checkboxRef} />
                            <PolicyTextArea>
                                <LinkTag to="/inquiry/policy">
                                    <Policy>개인정보방침</Policy>
                                </LinkTag>
                                에 동의합니다.&nbsp;<Accent>(필수)</Accent>
                            </PolicyTextArea>
                        </CheckBoxArea>
                        <InquirybtnArea onClick={eamilSend}>
                            <Iqbtn 
                                bgcolor="#05103d" 
                                ftcolor="#ffffff"
                            >
                                문의 보내기
                            </Iqbtn>
                        </InquirybtnArea>
                    </Section>
                </DetailArea>            
            </Wrapper>
            <Modal
                width={modalWidth+'px'}
                closable={false}
                centered={true}
                footer={null}
                bodyStyle={{padding : '0'}}
                title={null} 
                visible={isModalVisible} 
                onCancel={handleCancel}>
                <ModalInner>
                    <ModalContents>
                        {/* <ModalTitle>문의 접수 완료</ModalTitle> */}
                        <ModalDesc>
                            {/* 문의내용이 접수되었습니다.<br />
                            접수된 내용과 관련하여 담당자 확인 후<br />
                            영업일 기준 3일 이내에 연락드리겠습니다.<br />
                            감사합니다. */}
                            {modalText}
                        </ModalDesc>
                    </ModalContents>
                </ModalInner>
                <ModalOkbtnArea onClick={handleCancel}>
                    <ModalOk>확인</ModalOk>
                </ModalOkbtnArea>
            </Modal>
        </>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const InquiryTextArea = styled.div`
    width : 1200px;
    padding-bottom : 40px;
    margin-top : 250px;
    border-bottom : 2px solid #05103d;
    
    @media all and (max-width:1200px) {
        width : 92%;
        margin-top : 128px;
        padding-bottom : 20px;
    }
`
const IqTitle = styled.div`
    font-size: 40px;
    font-weight: 600;
    line-height: 1.46;
    color: #05103d;
    margin-bottom : 20px;

    @media all and (max-width:1200px) {
        font-size: 24px;
        line-height: 1.33;
        margin-bottom : 16px;
    }

`
const IqContents1 = styled.div`
    font-size: 18px;
    line-height: 1.71;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.57; 
    }
`
const IqContents2 = styled.div`
    font-size: 16px;
    line-height: 1.9;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
    }
`
// Detail Contents
const DetailArea = styled.div`
    width : 1200px;
    margin-top : 68px;
    margin-bottom : 150px;
    display : flex;

    @media all and (max-width:1200px) {
        display : block;
        width : 92%;
        margin-top : 40px;
        margin-bottom : 60px;
    }
`

const Section = styled.div`
    width : 600px;
    /* background-color : red; */
    
    @media all and (max-width:1200px) {
        width : 100%;
    }
`

const TextArea = styled.div`
`

const CheckBoxArea = styled.div`
    width : 100%;
    height: 24px;
    display : flex;
    align-items : center;
    margin-bottom : 40px;

    @media all and (max-width:1200px) {
        margin-bottom : 51px;
    }
`
const InquirybtnArea = styled.div`
    display : flex;
    justify-content : flex-end;
    
    @media all and (max-width:1200px) {
        justify-content : center;
    }
`

const Iqbtn = styled(Inquirybtn)`
    @media all and (max-width:1200px) {
        width : 100%;
        height : 45px;
    }
`

const InquiryInput = styled.div`
    width : auto;
    margin-bottom : 20px;
    
    &:last-child {
        margin-bottom : 0px;
    }

    @media all and (max-width:1200px) {
        margin-bottom : 30px;
    }
`

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 10px;

    @media all and (max-width:1200px) {
        font-size: 14px;
        line-height: 1.57;
        margin-bottom : 10px;
    }
`
const Input = styled.input`
    width : 550px;
    height : 48px;
    border : solid 1px #c1c1c1;

    @media all and (max-width:1200px) {
        width : 100%;
        height : 45px;
    }
`

const TextAreaText = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.83;
    color: #000000;
    margin-bottom : 10px;

    @media all and (max-width:1200px) {
        margin-top : 20px;
        font-size: 14px;
        line-height: 1.57;
    }
`

const TextBox = styled.textarea`
    width : 100%;
    height : 358px;
    border : solid 1px #c1c1c1;

    @media all and (max-width:1200px) {
        height : 200px;
    }
`

const PolicyTextArea = styled.div`
    font-size: 16px;
    color: #000000;
    margin-left : 12px;
    
    @media all and (max-width:1200px) {
        font-size: 14px;
        margin-left : 8px;
    }
`
const Policy = styled.a`
    color: #3029ff;
`
const Accent = styled.span`
    color: #ff0000;
`

const LinkTag = styled(Link)`
    text-decoration : none !important;
`

const ModalInner = styled.div`
    width : 100%;
    height : 100%;
    padding : 20px;

    @media all and (max-width:1200px) {
        /* width : 92%; */
    }
`

const ModalContents = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
`

const ModalTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-top : 40px;
    margin-bottom : 20px;
    text-align : center;
`

const ModalDesc = styled.div`
    font-size: 16px;
    line-height: 1.81;
    text-align: center;
    color: #555555;
    /* margin-bottom : 20px; */
`

const ModalOkbtnArea = styled.div`
    cursor: pointer;
    width : 100%;
    display : flex;
    justify-content : center;
    border-top : 1px solid #f5f5f5;
    transition : .5s;

    &:hover {
        background-color : #f5f5f5;
    }
`

const ModalOk = styled.div`
    margin : 15px 0px;
    font-size: 18px;
    line-height: 1.72;
    color: #000000;
`

export default Inquiry_01