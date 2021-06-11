import React from 'react'
import styled from 'styled-components'
import dots from '../../../images/dot.png'
import history_img01 from '../../../images/ab_history_img01.jpg'
import history_img02 from '../../../images/ab_history_img02.jpg'
import Fade from 'react-reveal/Fade'

const HistoryBoxList = () => {
    const list = [
        {
            id : 1,
            type : 'left',
            year : '2020',
            contents : [
                '(주)현대그림푸드 공급',
                '(주)쿠팡 2차벤더 공급'
            ],
            img : ''
        },
        {
            id : 2,
            type : 'right',
            year : '2019',
            contents : [
                '(주)동원에프엔비 공급',
                '(주)신세계푸드 공급'
            ],
            img : <Img src={history_img01} alt="이미지" />
        },
        {
            id : 3,
            type : 'left',
            year : '2018',
            contents : [
                '(주)동원홈푸드 공급',
                'B2B 브랜드 “바다닷” 런칭'
            ],
            img : ''
        },
        {
            id : 4,
            type : 'right',
            year : '2017',
            contents : [
                '낙지, 주꾸미요리 프렌차이즈 업체 공급'
            ],
            img : ''
        },
        {
            id : 5,
            type : 'left',
            year : '2016',
            contents : [
                '베트남 호치민 현지 지사 설립'
            ],
            img : <Img src={history_img02} alt="이미지" />
        },
        {
            id : 6,
            type : 'right',
            year : '2015',
            contents : [
                '(주)삼성웰스토리 공급'
            ],
            img : ''
        },
        {
            id : 7,
            type : 'left',
            year : '2014',
            contents : [
                '(주) 바이오션 설립',
                '글로벌 파트너 MOU체결 (베트남 5社, 중국3社, 태국1社)',
                '학교 급식 공급',
                '(주)동원홈푸드 2차벤더 공급',
                '(주)신세계푸드 2차벤더'
            ],
            img : ''
        }
    ]
    
    return (
       <>
        {list.map((itemlist) => {
            return (
                <HistoryBox key={itemlist.id} type={itemlist.type}>
                    <Section type={itemlist.type}>
                        <Fade top duration={2000}>
                            <Year type={itemlist.type}>{itemlist.year}</Year>
                        </Fade>
                        {itemlist.contents.map(((idx, index) => {
                            return (
                                <>
                                    <Fade delay={800} duration={2000}>
                                        <Record type={itemlist.type}>
                                            {(itemlist.type ==='left') 
                                            ? <><Dots type={itemlist.type} /><Text>{idx}</Text></>
                                            : <><Text>{idx}</Text><Dots /></>}
                                        </Record>
                                    </Fade>
                                    <Fade right duration={2000}>
                                        <MobileRecord>
                                            <MobileDots number={index}
                                                        id={itemlist.id} 
                                                        type={itemlist.type} /><Text>{idx}</Text>
                                        </MobileRecord>
                                    </Fade>
                                </>
                            )
                        }))}
                        {itemlist.img}
                    </Section>
                </HistoryBox>
            )
        })}
       </>
    )
}

const Ab_history_01 = () => {

    return (
        <Wrapper>
            <Fade delay={800} duration={2000}>
                <Title>HISTORY</Title>
            </Fade>
            <Inner>
                <HistoryBoxList />
            </Inner>
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
const Title = styled.div`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    color: #05103d;
    margin : 100px 0px;

    @media all and (max-width:1200px) {
        font-size: 22px;
        line-height: 1.33;
        margin : 60px 0px 40px 0px;
    }

`
const Inner = styled.div`
    position : relative;
    width : 981px;
    height : auto;

    &:before {
        content: "";
        position: absolute;
        width: 2px;
        height : 1945px; 
        left: 50%;
        margin-left: -2px;
        margin-top : 20px;
        background: #c1c1c1;
        z-index : 2;
    }

    @media all and (max-width:1200px) {
        width : 92%;
        &:before {
            content: "";
            width: 2px;
            height : 1337px; 
            left: 0;
            margin-top : 9px;
            background: #c1c1c1;
            z-index : 2;
        }
    }
`
const HistoryBox = styled.div`
    position : relative;
    width : 50%;
    left : ${(props) => (props.type === 'left')? '50%' : '0'};
    box-sizing : border-box;
    margin-bottom : 95.5px;

    &:before {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        ${(props) => (props.type === 'left')? 'left : -14px;' : 'right : -11px;'};
        background: url(${dots});
        background-repeat : no-repeat;
        background-size : cover;
        border-radius: 50%;
        margin-top : 15px;
        z-index: 2;
    }

    @media all and (max-width:1200px) {
        left : 5px;
        margin-bottom : 60px;

        &:before {
            margin-top: 8px;
            left : -14px;
            width: 16px;
            height: 16px;
        }
    }
`
const Section = styled.div`
    width: 438px;
    height : auto;
    margin-left : ${(props) => (props.type === 'left')? '52.5px;' : '0px'};

    @media all and (max-width:1200px) {
        width: 320px;
        margin-left : 14px;
    }
`
const Year = styled.div`
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0.68px;
    margin-bottom : 10px;
    text-align : ${(props) => (props.type === 'left')? 'left' : 'right'};
    color: #000000;

    @media all and (max-width:1200px) {
        text-align : left;
        font-size: 18px;
        margin-bottom : 8px;
    }
`

const Record = styled.div`
    font-size: 16px;
    line-height: 2;
    color: #000000;
    display : flex;
    align-items : center;
    justify-content : ${(props) => (props.type === 'left')? 'flex-start' : 'flex-end'};

    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileRecord = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : flex;
        align-items : center;
    }
`
const Dots = styled.div`
    width : 5px;
    height : 5px;
    ${(props) => (props.type === 'left')? 'margin-right : 10px;' : 'margin-left : 10px;'};
    background : #000000;
    border-radius : 50%;

    @media all and (max-width:1200px) {
        display : none;
    }
`

const MobileDots = styled.div`
    display : none;

    @media all and (max-width:1200px) {
        display : block;
        width : 4px;
        height : 4px;
        margin-top : ${props =>(props.id === 7) && (props.number === 1) ? '-23px': '3px' };
        margin-right : 6px;
        background : #000000;
        border-radius : 50%;
    }
`

const Img = styled.img`
    margin-top : 40px;

    @media all and (max-width:1200px) {
        width: 100%;
        margin-top : 20px;
    }
`

const Text = styled.div`
    white-space : pre-line;
    
    @media all and (max-width:1200px) {
        font-size : 14px;
        line-height : 2;
    }
`


export default Ab_history_01