import x from './Hero.module.scss'
import { useState, useRef, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'


export const Hero = ({ inputInfo }) => {
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        })
    }, [])

    const today = new Date()

    const year = today.getFullYear()
    const month = today.toLocaleString("en-US", { month: "long" })
    const day = today.toLocaleString("en-US", { weekday: "long" })
    const date = today.getDate()

    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return 'th'
        switch (n % 10) {
            case 1: return 'st'
            case 2: return 'nd'
            case 3: return 'rd'
            default: return 'th'
        }
    }



    const inputRef = useRef(null)

    const inputValue = (e) => {
        e.preventDefault()

        const infoFromInput = inputRef.current.value.trim()
        if (!infoFromInput) return
        inputInfo(infoFromInput)
        inputRef.current.value = ''
    }

    return (
        <div data-aos="zoom-in">
            <div id='hero' className={x.hero}>
                <div className='container'>

                    <h1 className={x.hero__title}>Weather dashboard</h1>
                    <div className={x.hero__wrapper}>
                        {isTablet ? (
                            <>
                                <p className={x.hero__parag}>Create your personal list of favorite cities and always be aware of the weather.</p>
                                <div className={x.hero__bar}></div>
                                <div className={x.hero__date}>
                                    <p className={x.hero__paragg}>{month} {year}</p>
                                    <p className={x.hero__paragg}>
                                        {day} {date}
                                        <sup className={x.hero__span}>{getOrdinal(date)}</sup>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={x.hero__bar}></div>
                                <div className={x.hero__toWrapp}>
                                    <p className={x.hero__parag}>
                                        Create your personal list of favorite cities and always be aware of the weather.
                                    </p>
                                    <div className={x.hero__date}>
                                        <p className={x.hero__paragg}>{month} {year}</p>
                                        <p className={x.hero__paragg}>
                                            {day} {date}
                                            <sup className={x.hero__span}>{getOrdinal(date)}</sup>
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className={x.hero__toWrapp}>
                        </div>
                    </div>
                </div>
                <form onSubmit={inputValue} className={x.hero__form}>
                    <input ref={inputRef} placeholder='Search location...' className={x.hero__input} type="text" />
                    <button className={x.hero__btn}><IoSearch className={x.btnSearch} /></button>
                </form>
            </div>
        </div>
    )
}