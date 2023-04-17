import React, { useState } from "react"
import styled from "styled-components"
import { motion, spring } from "framer-motion"

export default function UnlockBtn({onClick}) {
    const Container = styled(motion.div)`
    grid-column: 1 / -1;
    grid-row: -1 / span 1;
    padding: 20px;
    `

    const Text = styled(motion.p)`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FFFF;
    text-align: center;
    -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
    `

    return (
        <Container >
            <Text
                whileTap={{color: "rgb(255, 207, 15)"}}
                whileHover={{cursor: "pointer", color: "rgb(255, 207, 15)", scale: 1.2}}
                onClick={onClick}
            >
                {"Tap here to unlock"}
            </Text>
        </Container>
    )
}