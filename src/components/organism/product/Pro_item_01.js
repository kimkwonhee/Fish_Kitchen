import React from 'react'
import styled from 'styled-components'
import Img_item01 from '../../../images/product_item_01.jpg'
import Img_item02 from '../../../images/product_item_02.jpg'
import Img_item03 from '../../../images/product_item_03.jpg'
import Img_item04 from '../../../images/product_item_04.jpg'
import Img_item05 from '../../../images/product_item_05.jpg'
import Img_item06 from '../../../images/product_item_06.jpg'

const Pro_item_01 = () => {

    const itemlist = [
        { id : 1, name : '냉동 새우살', enname : 'Frozen Shrimp Meat', img : Img_item01 },
        { id : 2, name : '냉동 자반 고등어', enname : 'Frozen Salted Mackeral Fillet', img : Img_item02 },
        { id : 3, name : '냉동 쭈꾸미', enname : 'Frozen Whole Cleaned Baby Octopus', img : Img_item03 },
        { id : 4, name : '냉동 절단 주꾸미', enname : 'Frozen Baby Octopus Cut', img : Img_item04 },
        { id : 5, name : '냉동 절단 낙지', enname : 'Frozen Poulp Squid Cut', img : Img_item05 },
        { id : 6, name : '냉동 절단 가자미', enname : 'Frozen Sole Cut', img : Img_item06 },
    ]

    return (
        <Wrapper>
            <Section>
                {itemlist.map((list => {
                    return  <Item key={list.id}>
                                <ImgItem src={list.img} alt={list.name} />
                                <ItemName>{list.name}</ItemName>
                                <ItemEnName>{list.enname}</ItemEnName>
                            </Item>
                }))}
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : auto;
    display : flex;
    justify-content : center;

    @media all and (max-width:1200px) {
        
    }
`

const Section = styled.div`
    width : 1200px;
    height : auto;
    margin : 150px 0px 120px 0px;
    display : flex;
    flex-wrap : wrap;

    @media all and (max-width:1200px) {
        width : 92%;
        margin : 60px 0px 20px 0px;
        /* flex-wrap : initial; */
    }
`

const Item = styled.div`
    padding : 0 10px;
    margin-bottom : 100px;

    @media all and (max-width:1200px) {
        width : 50%;
        margin-bottom : 40px;
    }
`

const ImgItem = styled.img`
    width : 380px;
    height : 491px;
    margin-bottom : 40px;

    @media all and (max-width:1200px) {
        width : 100%;
        height : auto;
        margin-bottom : 10px;
    }
`
const ItemName = styled.div`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.4px;
    margin-bottom : 5px;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 16px;
    }
`
const ItemEnName = styled.div`
    font-size: 14px;
    color: #000000;

    @media all and (max-width:1200px) {
        font-size: 10px;
        word-break : keep-all;
    }
`

export default Pro_item_01