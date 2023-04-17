import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components"
import Desktop from "./Desktop/Desktop"
import Mobile from "./Mobile/Mobile"
import Container from "./Desktop/DesktopStyle"

export default function App() {
    const [isMounted, setIsMounted] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 750) {
                if (location.pathname !== "/mobile") {
                    navigate('mobile')
                }
            } else {
                if (location.pathname !== "/desktop") {
                    navigate('desktop')
                }
            }
        };

        window.addEventListener('resize', handleWindowResize);
        
        if (window.innerWidth < 600) {
            if (location.pathname !== "/mobile") {
                navigate('mobile')
            }
        } else {
            if (location.pathname !== "/desktop") {
                navigate('desktop')
            }
        }
        

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    const Container = styled.div`
        height: 100vh;
        width: 100%;
    `

    return (
        <Container>
            <Routes>
                <Route path="desktop" element={<Desktop />} />
                <Route path="mobile" element={<Mobile />} />
            </Routes>
        </Container>
    )
}