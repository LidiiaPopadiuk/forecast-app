import x from './WeekForecast.module.scss'
import { useState, useEffect } from 'react';
export const WeekForecast = ({ infoForecast }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    if (!infoForecast || infoForecast.length === 0) return null

    const dailyForecast = infoForecast.filter((_, index) => index % 8 === 0)

    return (
        <div className={x.week}>
            <div className="container">
                <div className={x.week__wrap}>
                    <h2 className={x.week__title}>{isMobile ? "4-Day Forecast" : "5-Day Forecast"}</h2>
                    <ul className={x.week__list}>
                        {dailyForecast.map((day, index) => {

                            const date = new Date(day.dt * 1000)

                            const start = index * 8
                            const daySlice = infoForecast.slice(start, start + 8)

                            const temps = daySlice.map(item => item.main.temp)

                            const minTemp = Math.min(...temps)
                            const maxTemp = Math.max(...temps)

                            return (
                                <li key={index} className={x.week__item}>
                                    <p className={x.week__date}>
                                        {date.toLocaleDateString("en-US", {
                                            weekday: "short",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>
                                    <div className={x.week__wrapper}>
                                        <img className={x.week__img} src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                                        <p className={x.week__degree}>
                                            {Math.round(maxTemp)}/{Math.round(minTemp)}℃
                                        </p>
                                    </div>
                                    <p className={x.week__descr}>{day.weather[0].description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
