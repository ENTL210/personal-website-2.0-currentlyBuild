import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Profile({isLockscreenMounted, setIsLockscreenMounted, isHomescreenMounted, setIsHomescreenMounted}) {
    const [password, setPassword] = useState("")

    useEffect(() => {
        setTimeout(() => {
            if (password.split("").length < 10) {
                setPassword(current => current + "●")
            } else {
                setIsLockscreenMounted(false)
                setIsHomescreenMounted(true)
            }   
        }, 100)
    }, [password])

    const Container = styled(motion.div)`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    `

    const Image = styled.img`
        width: 100px;
    `

    const Name = styled.h1`
        font-family: 'Imprima', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color: white;
    `

    const PasswordEntryBox = styled.h1`
        width: 200px;
        height: 25px;
        background: rgba(217, 217, 217, 0.48);
        border-radius: 7.5px;
        display: flex; 
        align-items: center;
    `

    const PasswordEntryText = styled.h1`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    padding: 15px;
    color: #FFFF;
    `


    return (
        <Container>
            <Image src="./images/logo.png" />
            <Name>Edward Lam</Name>
            <PasswordEntryBox>
                <PasswordEntryText>{password}</PasswordEntryText>
            </PasswordEntryBox>
        </Container>
    )
}