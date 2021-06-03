import React from 'react'
import styled from 'styled-components'

const Menubtn = ({link, path, children, onMouseOver}) => {

    console.log(path);
    return (
        <Wrapper
            onMouseOver={onMouseOver}
        >
            <Inner 
                link={link}
                path={path}>
                <Item 
                    link={link}
                    path={path}
                >
                    {children}
                </Item>
            </Inner>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width : 164px;
    height : 100%;
    display : flex;
    justify-content : center;
`

const Inner = styled.div`
    cursor: pointer;
    width : 84px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    border-bottom : ${(props) => (props.path === props.link) ? '3px solid #ffffff;' : null};
    transition: 0.5s; 
    transform: translateX(-50%);

    &:hover {
        border-bottom : 3px solid #ffffff;
    };
`
const Item = styled.div`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight :  ${(props) => (props.path === props.link) ? '500' : '300'};
    /* font-weight :  ${(props) => (props.path === props.link) ? 'bold' : 'normal'}; */
    color: ${(props) => (props.path === '/inquiry') ? '#05103d' : '#ffffff'};
`


export default Menubtn;