import React, {useEffect} from 'react'
import styled from 'styled-components'

const Menubtn = ({key, link, path, children}) => {

    useEffect(() => {
        console.log(path);
    },[]);

    return (
        <Wrapper
            key={key}
            link={link}
            path={path}
        >
            <Item>{children}</Item>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width : 164px;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor: pointer;
    border-bottom : ${(props) => (props.link === props.path) ? '2px solid #ffffff;' : null};

    &:hover {
        border-bottom : ${(props) => (props.key === props.key) ? '2px solid #ffffff;' : null}
    };


    /* background-color : red; */
`

const Item = styled.div`
    font-size: 20px;
    line-height: 1;
    color: #ffffff;
`

export default Menubtn;