import { useFetch } from "../../hooks/useFetch"
import { PiArrowClockwiseBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import x from './Cards.module.scss'

export const Cards = ({infoCity, detailInfo, hourInfo, weekInfo}) => {

    return (
        <div className={x.cards}>
            <div className="container">
                <ul className={x.cards__list}>
                    {infoCity.map(item => {

                        const localTime = (item.dt + item.timezone) * 1000;
                        const date = new Date(localTime);

                        const time = date.toLocaleTimeString('uk-UA', {
                            hour: '2-digit',
                            minute: '2-digit'
                        });

                        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                        const fullDate = date.toLocaleDateString('uk-UA');

                        return (
                            <li className={x.cards__item} key={item.id}>
                                <div className={x.cards__wrapperCity}>
                                    <p>{item.name}</p>
                                    <p>{item.sys.country}</p>
                                </div>
                                <div className={x.cards__wrapperCentral}>
                                    <h3 className={x.cards__time}>{time}</h3>
                                    <button onClick={hourInfo} className={x.cards__btn}>Hourly forecast</button>
                                    <div className={x.cards__wrapperDay}>
                                        <p>{fullDate}</p>
                                        <div className={x.cards__bar}></div>
                                        <p>{day}</p>
                                    </div>
                                </div>
                                <div>
                                    <img className={x.cards__img} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`} alt={item.weather[0].description} />
                                    <h2 className={x.cards__deegr}>{Math.round(item.main.temp)}°C</h2>
                                </div>
                                <div className={x.cards__wrapperIcons}>
                                    <p><PiArrowClockwiseBold size={30}/></p>
                                    <p><FaRegHeart fill="red" size={30}/></p>
                                    <button onClick={detailInfo} className={x.cards__btn}>See more</button>
                                    <p><RiDeleteBin6Line size={30}/></p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}