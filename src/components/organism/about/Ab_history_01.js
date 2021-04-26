import React from 'react'
import styled from 'styled-components'
import dots from '../../../images/dot.png'
import history_img01 from '../../../images/ab_history_img01.jpg'
import history_img02 from '../../../images/ab_history_img02.jpg'



const HistoryBoxList = () => {
    const list = [
        {
            id : 1,
            type : 'left',
            year : '2020',
            contents : [
                '(주)현대그림푸드 공급',
                '쿠팡(주) 2차벤더 공급'
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
                '글로벌 파트너 MOU체결(베트남 5社, 중국3社, 태국1社)',
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
                        <Year type={itemlist.type}>{itemlist.year}</Year>
                        {itemlist.contents.map((idx => {
                            return (
                                <Record type={itemlist.type}>
                                    {(itemlist.type ==='left') 
                                    ? <><Dots type={itemlist.type} />{idx}</>
                                    : <>{idx}<Dots /></>}
                                </Record>
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
           <Title>HISTORY</Title>
           <Inner>
               <HistoryBoxList />


               {/* <HistoryBox type="left">
                    <Section type="left">
                        <Year type="left">2020</Year>
                        <Record type="left"><Dots type="left"/>(주)현대그림푸드 공급</Record>
                        <Record type="left"><Dots type="left"/>쿠팡(주) 2차벤더 공급</Record>
                    </Section>
               </HistoryBox>
               <HistoryBox>
                   <Section>
                        <Year>2019</Year>
                        <Record>(주)동원에프엔비 공급<Dots /></Record>
                        <Record>(주)신세계푸드 공급<Dots /></Record>
                        <Img src={history_img01} alt="이미지" />
                    </Section>
               </HistoryBox>
               <HistoryBox type="left">
                    <Section type="left">
                        <Year type="left">2018</Year>
                        <Record type="left"><Dots type="left"/>(주)동원홈푸드 공급</Record>
                        <Record type="left"><Dots type="left"/>B2B 브랜드 “바다닷” 런칭</Record>
                    </Section>
               </HistoryBox>
               <HistoryBox>
                   <Section>
                        <Year>2017</Year>
                        <Record>낙지, 주꾸미요리 프렌차이즈 업체 공급<Dots /></Record>
                    </Section>
               </HistoryBox>
               <HistoryBox type="left">
                    <Section type="left">
                        <Year type="left">2016</Year>
                        <Record type="left"><Dots type="left"/>베트남 호치민 현지 지사 설립</Record>
                        <Img src={history_img02} alt="이미지" />
                    </Section>
               </HistoryBox>
               <HistoryBox>
                   <Section>
                        <Year>2015</Year>
                        <Record>(주)삼성웰스토리 공급<Dots /></Record>
                    </Section>
               </HistoryBox>
               <HistoryBox type="left">
                    <Section type="left">
                        <Year type="left">2014</Year>
                        <Record type="left"><Dots type="left"/>(주) 바이오션 설립</Record>
                        <Record type="left"><Dots type="left"/>글로벌 파트너 MOU체결(베트남 5社, 중국3社, 태국1社)</Record>
                        <Record type="left"><Dots type="left"/>학교 급식 공급</Record>
                        <Record type="left"><Dots type="left"/>(주)동원홈푸드 2차벤더 공급</Record>
                        <Record type="left"><Dots type="left"/>(주)신세계푸드 2차벤더</Record>
                    </Section>
               </HistoryBox> */}
           </Inner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 2600px;
    display : flex;
    flex-direction : column;
    align-items : center;
    /* background : grey; */
`
const Title = styled.div`
    font-size: 48px;
    font-weight: 900;
    line-height: 3.13;
    text-align: center;
    color: #05103d;
    margin-bottom : 100px;
`
const Inner = styled.div`
    position : relative;
    width : 981px;
    height : 2194px;
    /* background : red; */

    &:before {
        content: "";
        position: absolute;
        width: 2px;
        height : 1990px; 
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -2px;
        margin-top : 9px;
        background: #333;
        z-index : 2;
    }
`
const HistoryBox = styled.div`
    position : relative;
    width : 50%;
    left : ${(props) => (props.type === 'left')? '50%' : '0'};
    box-sizing : border-box;
    margin-bottom : 95.5px;
    /* background : green; */

    &:before {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        ${(props) => (props.type === 'left')? 'left : -14px;' : 'right : -11px;'};
        background: url(${dots});
        border-radius: 50%;
        margin-top : 9px;
        z-index: 2;
    }
`
const Section = styled.div`
    width: 438px;
    height : auto;
    margin-left : ${(props) => (props.type === 'left')? '52.5px;' : '0px'};
    /* background : grey; */
`
const Year = styled.div`
    font-size: 34px;
    font-weight: 900;
    letter-spacing: 0.68px;
    margin-bottom : 20px;
    text-align : ${(props) => (props.type === 'left')? 'left' : 'right'};
    color: #000000;
`
const Dots = styled.div`
    width : 6px;
    height : 6px;
    ${(props) => (props.type === 'left')? 'margin-right : 14px;' : 'margin-left : 14px;'};
    background : #000000;
    border-radius : 50%;
`
const Record = styled.div`
    font-size: 17px;
    line-height: 1.78;
    color: #000000;
    display : flex;
    align-items : center;
    justify-content : ${(props) => (props.type === 'left')? 'flex-start' : 'flex-end'};
`
const Img = styled.img`
    margin-top : 40px;
`

export default Ab_history_01