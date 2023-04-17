import styled from "styled-components";
import { motion } from "framer-motion"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

const ScreenSaver = styled(motion.div)`
    width: 100%;
    height: 100vh;
    grid-row: 1 / - 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

const Lockscreen = styled(motion.div)`
    width: 100%;
    height: 100vh;
    grid-row: 1 / - 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

const Homescreen = styled(motion.div)`
    width: 100%;
    height: 100vh;
    grid-row: 1 / - 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

const Navbar = styled.div`
    width: 100%;
    height: 32px;
    background: rgba(255, 255, 255, 0.14);
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-start;
    padding: 5px;
    gap: 5px;
`

const NavbarItem = styled(motion.button)`
    background: none;
	color: inherit;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    border: none;
    border-radius: 5px;
`

const Text = styled.h1`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: white;
`

const Image = styled.img`
width: 25px;
padding: 5px;
`

const NavBarItemChildWrapper = styled(motion.div)`
    position: absolute;
    width: 100px;
    display: flex;
    background: #D9D9D9;
    border-radius: 10px;
    padding-left: 5px;
`

const NavBarItemChild = styled(motion.div)`

`


export {
    Container,
    ScreenSaver,
    Lockscreen,
    Homescreen,
    Navbar,
    NavbarItem,
    Text,
    Image,
    NavBarItemChildWrapper,
    NavBarItemChild
};