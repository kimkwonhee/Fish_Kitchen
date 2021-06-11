import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const SubMenubtn = ({className, link, children, location, top, onMouseOver, onMouseOut}) => {
    let pathname = location.pathname
    return (
        <Wrapper onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <Text link={link} 
                  pathname={pathname}
                  top={top}
            >
                    {children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : auto;
    height : 100px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 40px;
`

const Text = styled.div`
    font-size: 14px;
    font-weight : ${props => props.link === props.pathname ? '400' : '200'};
    letter-spacing: 1px;
    color: ${(props) => (props.pathname === '/inquiry') 
                        ? '#05103d' 
                        : props.top ? '#ffffff' :'#05103d'};
`

export default withRouter(SubMenubtn)