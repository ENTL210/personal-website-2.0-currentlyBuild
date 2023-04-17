import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader"
import DClock from "../Components/DClock"
import { Container, ScreenSaver, Lockscreen, Homescreen, Navbar, NavbarItem, Text, Image, NavBarItemChildWrapper, NavBarItemChild } from "./DesktopStyle"
import UnlockBtn from "../Components/UnlockBtn"
import Profile from "../Components/Profile"
import background from "../images/wallpaper.jpeg"

export default function Desktop() {
    const [isScreenSaverMounted, setIsScreenSaverMounted] = useState(false)
    const [isLoaderShow, setIsLoaderShow] = useState(true)
    const [isLockscreenMounted, setIsLockscreenMounted] = useState(false)
    const [isHomescreenMounted, setIsHomescreenMounted] = useState(false)
    const [password, setPassword] = useState("")
    const [activeNavBarItem, setActiveNavBarItem] = useState("")

    useEffect(() => {
        setTimeout(() => { setIsLoaderShow(false) }, 200)

        if (isLoaderShow === false) {
            setIsScreenSaverMounted(true)
        }
    }, [isLoaderShow])


    const openNCloseAnimation = {
        show: { opacity: 1, display: "" },
        closed: { opacity: 0, display: "none" },
    }

    const activeNInactiveAnimation = {
        active: { background: "rgba(217, 217, 217, 0.2)" },
        inactive: { background: "none" },
    }

    console.log(activeNavBarItem)

    return (
        <Container
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }}
        >
            {isLoaderShow === true &&
                <Loader isShow={isLoaderShow} />
            }
            {isScreenSaverMounted === true &&
                <ScreenSaver
                    initial={{ opacity: 0, display: "none" }}
                    animate={isScreenSaverMounted === true ? "show" : "close"}
                    variants={openNCloseAnimation}
                >
                    <DClock />
                    <UnlockBtn onClick={() => {
                        setIsScreenSaverMounted(false)
                        setIsLockscreenMounted(true)
                    }} />
                </ScreenSaver>}
            {(isLockscreenMounted === true) &&
                <Lockscreen
                    initial={{ opacity: 0, display: "none" }}
                    animate={isLockscreenMounted === true ? "show" : "close"}
                    variants={openNCloseAnimation}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                >
                    <Profile
                        isLockscreenMounted={isLockscreenMounted}
                        setIsLockscreenMounted={setIsLockscreenMounted}
                        isHomescreenMounted={isHomescreenMounted}
                        setIsHomescreenMounted={setIsHomescreenMounted}
                    />
                </Lockscreen>}

            {isHomescreenMounted === true &&
                <Homescreen
                    initial={{ opacity: 0, display: "none" }}
                    animate={isHomescreenMounted === true ? "show" : "close"}
                    variants={openNCloseAnimation}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    onClick={event => {
                        event.preventDefault()
                        if (event.target === event.currentTarget) {
                            if (activeNavBarItem !== "") {
                                setActiveNavBarItem("")
                            }
                        }
                    }}
                >
                    <Navbar>
                        <NavbarItem
                            initial={{ background: "none" }}
                            animate={activeNavBarItem === "logo" ? "active" : "inactive"}
                            variants={activeNInactiveAnimation}
                            onClick={event => {
                                if (activeNavBarItem === "logo") {
                                    setActiveNavBarItem("")
                                } else {
                                    setActiveNavBarItem("logo")
                                }
                            }}
                            whileHover={() => {
                                if (activeNavBarItem !== "") {
                                    setActiveNavBarItem("logo")
                                }
                            }}
                        >
                            <Image alt="" src="./images/logo.png" />
                            {activeNavBarItem === "logo" &&
                                <NavBarItemChildWrapper>
                                    <NavBarItemChild>
                                        <Text>Hello</Text>
                                    </NavBarItemChild>
                                </NavBarItemChildWrapper>
                            }
                        </NavbarItem>
                        <NavbarItem
                            initial={{ background: "none" }}
                            animate={activeNavBarItem === "Work" ? "active" : "inactive"}
                            variants={activeNInactiveAnimation}
                            onClick={event => {
                                if (activeNavBarItem === "Work") {
                                    setActiveNavBarItem("")
                                } else {
                                    setActiveNavBarItem("Work")
                                }
                            }}
                            whileHover={() => {
                                if (activeNavBarItem !== "") {
                                    setActiveNavBarItem("Work")
                                }
                            }}
                        >
                            <Text>Works</Text>
                        </NavbarItem>
                        <NavbarItem
                            initial={{ background: "none" }}
                            animate={activeNavBarItem === "Favorites" ? "active" : "inactive"}
                            variants={activeNInactiveAnimation}
                            onClick={event => {
                                if (activeNavBarItem === "Favorites") {
                                    setActiveNavBarItem("")
                                } else {
                                    setActiveNavBarItem("Favorites")
                                }
                            }}
                            whileHover={() => {
                                if (activeNavBarItem !== "") {
                                    setActiveNavBarItem("Favorites")
                                }
                            }}
                        >
                            <Text>Favorites</Text>
                        </NavbarItem>
                        <NavbarItem
                            initial={{ background: "none" }}
                            animate={activeNavBarItem === "Social" ? "active" : "inactive"}
                            variants={activeNInactiveAnimation}
                            onClick={event => {
                                if (activeNavBarItem === "Social") {
                                    setActiveNavBarItem("")
                                } else {
                                    setActiveNavBarItem("Social")
                                }
                            }}
                            whileHover={() => {
                                if (activeNavBarItem !== "") {
                                    setActiveNavBarItem("Social")
                                }
                            }}
                        >
                            <Text>Social</Text>

                        </NavbarItem>
                    </Navbar>
                </Homescreen>
            }

        </Container>
    )
}