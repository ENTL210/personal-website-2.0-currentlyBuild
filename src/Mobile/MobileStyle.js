import styled  from "styled-components";
import {motion} from "framer-motion"

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    background: linear-gradient(180deg, #767676 0%, #4A4A4A 47.32%, #171717 103.25%);
`

const Lockscreen = styled(motion.div) `
    width: 100%;
    height: 100vh;
    grid-row: 1 / - 1;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    background: linear-gradient(180deg, #767676 0%, #4A4A4A 47.32%, #171717 103.25%);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`
export {Container, Lockscreen};