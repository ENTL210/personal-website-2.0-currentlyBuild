import styled from "styled-components";
import {motion} from "framer-motion"

const Container = styled(motion.div)`
        grid-column: 1 / -1;
        grid-row: 2 / span 1;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 
    `

const Time = styled.p`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: #FFFF;
    text-align: center;
    grid-column: 1 / -1;
    padding: 0px;
    margin: 0px;
    `

const DateText = styled.p`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    color: #FFFF;
    text-align: center;
    grid-column: 1 / -1;
    padding: 0px;
    margin: 0px;
    `

export {Container, Time, DateText}