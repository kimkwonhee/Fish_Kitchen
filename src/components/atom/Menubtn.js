import React from 'react'
import styled from 'styled-components'

const Menubtn = ({key, children}) => {

    return (
        <Wrapper
            key={key}
        >
            <Item>{children}</Item>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer;
    &:hover {
        ${(props) => (props.key === props.key) ? 'border-bottom : 2px solid #ffffff;' : null}
    }
`

const Item = styled.div`
    font-size: 20px;
    line-height: 1;
    color: #ffffff;
`

export default Menubtn;