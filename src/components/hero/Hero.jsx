import x from './Hero.module.scss'
import { useState } from 'react'

export const Hero = () => {

    const [month] = useState('October');
    const [year] = useState('2025');
    const [date] = useState('13th');
    const [day] = useState('Friday');

    return (
        <div className={x.hero}>
            <h1>Weather dashboard</h1>
            <div>
                <p>Create your personal list of favorite cities and always be aware of the weather.</p>
                <div></div>
                <p>{month} {year}</p>
                <p>{day} {date} </p>
            </div>
        </div>
    )
}