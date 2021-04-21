import React , { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import Homepage_01 from '../components/organism/home/Homepage_01'
import Homepage_02 from '../components/organism/home/Homepage_02'
import Homepage_03 from '../components/organism/home/Homepage_03'
import Homepage_04 from '../components/organism/home/Homepage_04'
import Homepage_05 from '../components/organism/home/Homepage_05'
import Menubar from '../components/organism/Menubar';
import Homebtn from '../components/atom/Homebtn';

const _Home = () => {

    const homeimges = useRef(null);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const handleWhell = (e) => {
            if (homeimges !== null) {
                const currentWhell = e.wheelDelta;
                if (currentWhell < 0) {
                    homeimges.current.slickNext();
                }
                else {
                    homeimges.current.slickPrev();
                }
            }
        }
        window.addEventListener("mousewheel", handleWhell);
        return () => window.removeEventListener("mousewheel", handleWhell);       
    }, []);
   

    const onClick = (index) => {
        homeimges.current.slickGoTo(index);
        setNumber(index);
    };

    const settings = {
        dots : false,
        infinite : false,
        speed : 500, 
        slidesToShow : 1, 
        slidesToScroll : 1,
        vertical : true,
        verticalSwiping :true,
        arrows : false,
        draggable : false,
        ref :homeimges,
        afterChange: function(currentSlide) {
            setNumber(currentSlide)
        }
    }
    const item = [0,1,2,3,4]
      
    return (
        <Wrapper>
            <Menubar name="home"/>
            <Slider {...settings}>
                <Homepage_01 />
                <Homepage_02 />
                <Homepage_03 />
                <Homepage_04 />
                <Homepage_05 />
            </Slider>
            <DotsArea>
                {item.map(index => {
                    return (
                        <Homebtn 
                            key={index} 
                            number={number} 
                            onClick={() => onClick(index)} 
                            indexnumber={index}
                        />
                    )
                })}
            </DotsArea>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width : 100%;
  overflow-x : hidden;
  overflow-y : hidden;
`

const DotsArea = styled.div`
    position : fixed;
    top: 38vh;
    right: 0;
    z-index: 10;
    width: 8vw;
    height: 30vh;
    display : flex;
    flex-direction :column;
    justify-content : center;
    align-items : center;
`

export default _Home
