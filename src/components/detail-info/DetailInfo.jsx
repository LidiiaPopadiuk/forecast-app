import x from './DetailInfo.module.scss'
import eye from '../../img/pressure/eye.svg'
import degr from '../../img/pressure/degr.svg'
import press from '../../img/pressure/press.svg'
import rain from '../../img/pressure/rain.svg'
import wind from '../../img/pressure/wind.svg'
import React from 'react'
export const DetailInfo = ({ infoCity }) => {
    return (
        <div className={x.detail}>
            <div className='container'>
                <ul className={x.detail__list}>
                    {infoCity.slice(-1).map(city => {
                        return (
                            <React.Fragment key={city.id}>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Feels like</p>
                                    <h2 className={x.detail__degrees}>{city.main.feels_like}℃</h2>
                                    <img src={degr} alt="degrees" />
                                </li>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Min ℃</p>
                                    <h2 className={x.detail__degrees}>{city.main.temp_min}℃</h2>
                                    <p className={x.detail__title}>Max ℃</p>
                                    <h2 className={x.detail__subDegree}>{city.main.temp_max}℃</h2>
                                </li>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Humidity</p>
                                    <h2 className={x.detail__degrees}>{city.main.humidity}%</h2>
                                    <img src={rain} alt="rain" />
                                </li>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Pressure</p>
                                    <h2 className={x.detail__degrees}>{city.main.pressure} Pa</h2>
                                    <img src={press} alt="pressure" />
                                </li>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Wind speed</p>
                                    <h2 className={x.detail__degrees}>{city.wind.speed} m/s</h2>
                                    <img src={wind} alt="wind" />
                                </li>
                                <li className={x.detail__item}>
                                    <p className={x.detail__title}>Visibility</p>
                                    <h2 className={x.detail__degrees}>{city.visibility}</h2>
                                    <img src={eye} alt="eye" />
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}