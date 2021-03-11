import {useEffect, useState} from "react";

export const useScroll = () => {
    const [scroll, setScroll] = useState({
        home: undefined,
        about: undefined,
        pricing: undefined
    })
    useEffect(() => {
        const homeRef = window.document.getElementById('home')
        const pricingRef = window.document.getElementById('pricing')
        const aboutRef = window.document.getElementById('about')

        setScroll({home: homeRef, about: aboutRef, pricing: pricingRef})

    }, [])
    const scrollTo = (scroll) => {
        scroll.scrollIntoView({behavior: 'smooth',})
    }
    return {scroll, scrollTo}
}