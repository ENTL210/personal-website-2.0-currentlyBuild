import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

export default function DClock() {
    const Container = styled.div`
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

    const [date, setDate] = useState(new Date())

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);

    return (
        <Container >
            <Time>{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace("AM","").replace("PM","")}</Time>
            <DateText>{date.toLocaleDateString([], {weekday: 'long', month: 'long', day: 'numeric'})}</DateText>
        </Container>
    )
}