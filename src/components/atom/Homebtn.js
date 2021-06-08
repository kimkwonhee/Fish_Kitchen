import React from 'react'
import styled from 'styled-components'

const Homebtn = ({number, onClick, indexnumber}) =>  {
    return (
        <>
            <Dotbtn
                number={number}
                onClick={onClick}
                indexnumber={indexnumber}
            />
        </>
    )
}

const Dotbtn = styled.div`
    width: 10px;
    height: 10px;
    background-color : ${(props) => (props.number === props.indexnumber) 
                            ? 'rgba(255,255,255,1);' 
                            : 'rgba(255,255,255,0.5);'
                        } !important;
    border-radius : 50%;
    margin-bottom : 3vh;
    cursor: pointer;

    &:last-child {
        margin-bottom : 0;
    }

    @media all and (max-width:1200px) {
        width: 6px;
        height: 6px;
        margin-bottom : 15px;
    }
`

export default Homebtn