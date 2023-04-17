import React, { useState, useEffect } from "react";
import { Container, Lockscreen } from "./MobileStyle"
import Loader from "../Components/Loader"
import MClock from "../Components/MClock";
import UnlockBtn from "../Components/UnlockBtn";

export default function Mobile() {
    const [isLockscreenMounted, setIsLockscreenMounted] = useState(false)
    const [isLoaderShow, setIsLoaderShow] = useState(true)
    useEffect(() => {
        setTimeout(() => { setIsLoaderShow(false) }, 500)

        if (isLoaderShow === false) {
            setIsLockscreenMounted(true)
        }
    }, [isLoaderShow])

    return (
        <Container>
            {isLoaderShow === true &&
                <Loader isShow={isLoaderShow} />
            }
            {isLockscreenMounted === true &&
                <Lockscreen
                    initial={{ opacity: 0, display: "none"}}
                    animate={{ opacity: 1, display: ""}}
                    transition={{type: "tween", duration: 1}}
                >
                    <MClock />
                    <UnlockBtn />
                </Lockscreen>
            }
        </Container>
    )
}