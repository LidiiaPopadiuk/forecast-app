import x from './Hero.module.scss'
import { useState, useRef, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { useFetch } from '../../hooks/useFetch';

export const Hero = ({ inputInfo }) => {

    const [month] = useState('October');
    const [year] = useState('2025');
    const [date] = useState('13th');
    const [day] = useState('Friday');
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])



    // const { inputInfo } = useFetch()
    const inputRef = useRef(null)

    const inputValue = (e) => {
        e.preventDefault()

        const infoFromInput = inputRef.current.value.trim()
        if (!infoFromInput) return
        inputInfo(infoFromInput)
        inputRef.current.value = ''
    }

    return (
        <div className={x.hero}>
            <div className='container'>
                <h1 className={x.hero__title}>Weather dashboard</h1>
                <div className={x.hero__wrapper}>
                    {isTablet ? (
                        <>
                            <p className={x.hero__parag}>Create your personal list of favorite cities and always be aware of the weather.</p>
                            <div className={x.hero__bar}></div>
                            <div className={x.hero__date}>
                                <p className={x.hero__paragg}>{month} {year}</p>
                                <p className={x.hero__paragg}>{day} {date} </p>
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
                                    <p className={x.hero__paragg}>{day} {date}</p>
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
    )
}