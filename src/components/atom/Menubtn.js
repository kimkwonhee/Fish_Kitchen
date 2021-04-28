import React, {useEffect} from 'react'
import styled from 'styled-components'

const Menubtn = ({key, link, path, children}) => {

    // useEffect(() => {
    //     console.log(submenu);
    // }, []);

    const subitem = [0,1,2,3]

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
    border-bottom : ${(props) => (props.path === props.link) ? '2px solid #ffffff;' : null};

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

const SubMenuArea = styled.div`
    width : 100%;
    height : 100px;
    background : red;
`

const SubMenu = styled.div`
    width : 100%;
    height : 100px;
    background : blue;
    display : none;
`

export default Menubtn;