import x from './Hero.module.scss'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";

export const Hero = () => {

    const [month] = useState('October');
    const [year] = useState('2025');
    const [date] = useState('13th');
    const [day] = useState('Friday');

    return (
        <div className={x.hero}>
            <div className='container'>
               {/* <div className={x.hero__titleWrapper}> */}
                 <h1 className={x.hero__title}>Weather dashboard</h1>
                <div className={x.hero__wrapper}>
                    <p className={x.hero__parag}>Create your personal list of favorite cities and always be aware of the weather.</p>
                    <div className={x.hero__bar}></div>
                    <div className={x.hero__date}>
                        <p className={x.hero__paragg}>{month} {year}</p>
                        <p className={x.hero__paragg}>{day} {date} </p>
                    </div>
                </div>
               </div>
                <form className={x.hero__form}>
                    <input placeholder='Search location...' className={x.hero__input} type="submite" />
                    <button className={x.hero__btn}><IoSearch /></button>
                </form>
            {/* </div> */}
        </div>
    )
}