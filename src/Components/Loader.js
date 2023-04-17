import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion"


const Loader = ({ isShow }) => {
    return (
        <Container
            initial={{
                opacity: 1,
            }}
            animate={{
                opacity: isShow === true ? 1 : 0,
            }}
        >
            <LoaderView />
        </Container>
    )
}

export default Loader


// Loader Style
const spins = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

const webkitSpin = keyframes`
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
`

const Container = styled(motion.div)`
    width: 100%; 
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(163,163,163, 0.6);
`


const LoaderView = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: ${webkitSpin} 2s linear infinite;
    animation: ${spins} 2s linear infinite;
`