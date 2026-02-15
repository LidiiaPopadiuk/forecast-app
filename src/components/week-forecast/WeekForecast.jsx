import x from './WeekForecast.module.scss'
import svgRain from '../../img/svgRain.svg'
export const WeekForecast = ({ infoForecast }) => {
    const dayNow = Date.now()
    // console.log('day', dayNow.getData());
    
    return (
        <div className={x.week}>
            <div className="container">
                <div className={x.week__wrap}>
                    <h2 className={x.week__title}>5-day forecast</h2>
                    <ul className={x.week__list}>
                        {infoForecast.map(day => {
                            return (
                                <>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}></p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>23/14℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[0].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Sat, Oct 14</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>22/10℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[7].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Sun, Oct 15</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>13/6℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[14].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Mon, Oct 16</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>12/4℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[21].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Tue, Oct 17</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>12/4℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[28].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Wed, Oct 18</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>13/3℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[35].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Thu, Oct 19</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>12/5℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[42].description}</p>
                                    </li>
                                    <li className={x.week__item}>
                                        <p className={x.week__day}>Fri, Oct 20</p>
                                        <div className={x.week__wrapper}>
                                            <img src={svgRain} alt="" />
                                            <p className={x.week__degree}>9/3℃</p>
                                        </div>
                                        <p className={x.week__day}>{day.weather[49].description}</p>
                                    </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}