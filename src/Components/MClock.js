import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function MClock() {
    const Container = styled.div`
        grid-column: 1 / -1;
        grid-row: 1 / span 1;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px;
    `

    const Time = styled.p`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: #FFFF;
    text-align: center;
    grid-column: 1 / -1;
    padding: 5px;
    margin: 0;
    `

    const DateText = styled.p`
    font-family: 'Imprima', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #FFFF;
    text-align: center;
    grid-column: 1 / -1;
    padding-top: 30px;
    margin: 30px 0 0 0;
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
            <DateText>{date.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric'})}</DateText>
            <Time>{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).replace("AM","").replace("PM","")}</Time>
        </Container>
    )
}