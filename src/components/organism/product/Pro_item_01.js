import React from 'react'
import styled from 'styled-components'
import Img_item01 from '../../../images/product_item_01.jpg'
import Img_item02 from '../../../images/product_item_02.jpg'
import Img_item03 from '../../../images/product_item_03.jpg'
import Img_item04 from '../../../images/product_item_04.jpg'
import Img_item05 from '../../../images/product_item_05.jpg'
import Img_item06 from '../../../images/product_item_06.jpg'




const Pro_item_01 = () => {
    return (
        <Wrapper>
            <Section>
                <Item>
                    <ImgItem src={Img_item01} alt="" />
                    <ItemName>냉동 새우살</ItemName>
                    <ItemEnName>Frozen Shrimp Meat</ItemEnName>
                </Item>
                <Item>
                    <ImgItem src={Img_item02} alt="" />
                    <ItemName>냉동 자반 고등어</ItemName>
                    <ItemEnName>Frozen Salted Mackeral Fillet</ItemEnName>
                </Item>
                <Item>
                    <ImgItem src={Img_item03} alt="" />
                    <ItemName>냉동 쭈꾸미</ItemName>
                    <ItemEnName>Frozen Whole Cleaned Baby Octopus</ItemEnName>
                </Item>
                <Item>
                    <ImgItem src={Img_item04} alt="" />
                    <ItemName>냉동 절단 주꾸미</ItemName>
                    <ItemEnName>Frozen Baby Octopus Cut </ItemEnName>
                </Item>
                <Item>
                    <ImgItem src={Img_item05} alt="" />
                    <ItemName>냉동 절단 낙지</ItemName>
                    <ItemEnName>Frozen Poulp Squid Cut</ItemEnName>
                </Item>
                <Item>
                    <ImgItem src={Img_item06} alt="" />
                    <ItemName>냉동 절단 가자미</ItemName>
                    <ItemEnName>Frozen Sole Cut</ItemEnName>
                </Item>
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 1500px;
    /* height : auto; */
    display : flex;
    justify-content : center;
    /* background : red; */
`

const Section = styled.div`
    width : 1260px;
    height : auto;
    margin-top : 150px;
    display : flex;
    flex-wrap : wrap;
`

const Item = styled.div`
    width : 380px;
    padding : 0 20px;
    /* background : green; */
`

const ImgItem = styled.img`
    margin-bottom : 40px;
`
const ItemName = styled.div`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.4px;
    margin-bottom : 5px;
    color: #000000;
`
const ItemEnName = styled.div`
    font-size: 14px;
    color: #000000;
`

export default Pro_item_01