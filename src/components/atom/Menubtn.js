import React from 'react'
import styled from 'styled-components'

const Menubtn = ({className, id, link, path, children, top, onMouseOver}) => {

    let menu_status = 0;

    if(path === '/home') {
        menu_status = 1;
    } else if (path === '/about_store' 
            || path === '/about_vision'
            || path === '/about_company'
            || path === '/about_history') {
        menu_status = 2;
    } else if (path === '/product') {
        menu_status = 3;
    } 
    else if (path === '/shop') {
        menu_status = 4;
    } 
    else if (path === '/inquiry' || path === '/inquiry/policy') {
        menu_status = 5;
    }

    return (
        <Wrapper
            className={className}
            onMouseOver={onMouseOver}
        >
            <Inner 
                link={link}
                path={menu_status}
                id={id}
                top={top}
            >
                <Item 
                    link={link}
                    path={menu_status}
                    id={id}
                    top={top}
                >
                    {children}
                </Item>
            </Inner>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width : 164px;
    height : 101px;
    display : flex;
    justify-content : center;
`

const Inner = styled.div`
    z-index : 10;
    cursor: pointer;
    width : 84px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    border-bottom : ${(props) => (props.path === props.id) 
                    ? (props.path === 5) || (props.path === 4)
                        ? '3px solid #05103d'
                        : props.top 
                            ? '3px solid #ffffff' 
                            : '3px solid #05103d' 
                    : '3px solid transparent'};
    transition: 0.5s; 
    transform: translateX(-50%);

    &:hover {
        border-bottom : ${props => (props.path === 5) || (props.path === 4)
                        ? '3px solid #05103d'
                        : props.top 
                            ? '3px solid #ffffff' 
                            : '3px solid #05103d'};
    };
`
const Item = styled.div`
    font-size: 16px;
    letter-spacing: 1px;
    font-weight :  ${(props) => (props.path === props.id) 
                    ? '500' 
                    : '300'};
    color: ${(props) => (props.path === 5) || (props.path === 4)
                        ? '#05103d' 
                        : props.top 
                            ? '#ffffff' 
                            :'#05103d'};
`

export default Menubtn;