import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'

const SubMenubtn = ({className, link, children, location}) => {
    let pathname = location.pathname
    return (
        <Wrapper>
            <Text link={link} pathname={pathname}>{children}</Text>
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
    font-size: 16px;
    font-weight : ${props => props.link === props.pathname ? 'bold' : 'normal'};
    color: #ffffff;
`

export default withRouter(SubMenubtn)