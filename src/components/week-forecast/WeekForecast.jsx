import x from './WeekForecast.module.scss'
export const WeekForecast = ({ infoForecast }) => {

    const dailyForecast = infoForecast.filter((_, index) => index % 8 === 0)

    return (
        <div className={x.week}>
            <div className="container">
                <div className={x.week__wrap}>
                    <h2 className={x.week__title}>5-day forecast</h2>
                    <ul className={x.week__list}>
                        {dailyForecast.map((day, index) => {

                            const date = new Date(day.dt * 1000)

                            const start = index * 8
                            const daySlice = infoForecast.slice(start, start + 8)

                            const temps = daySlice.map(item => item.main.temp)

                            const minTemp = Math.min(...temps)
                            const maxTemp = Math.max(...temps)

                            return (
                                <li className={x.week__item}>
                                    <p className={x.week__day}>
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
                                    <p className={x.week__day}>{day.weather[0].description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// <li className={x.week__item}>
//         <p className={x.week__day}>Sat, Oct 14</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>22/10℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[7].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Sun, Oct 15</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>13/6℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[14].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Mon, Oct 16</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>12/4℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[21].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Tue, Oct 17</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>12/4℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[28].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Wed, Oct 18</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>13/3℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[35].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Thu, Oct 19</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>12/5℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[42].description}</p>
//     </li>
//     <li className={x.week__item}>
//         <p className={x.week__day}>Fri, Oct 20</p>
//         <div className={x.week__wrapper}>
//             <img src={svgRain} alt="" />
//             <p className={x.week__degree}>9/3℃</p>
//         </div>
//         <p className={x.week__day}>{day.weather[49].description}</p>
//     </li>