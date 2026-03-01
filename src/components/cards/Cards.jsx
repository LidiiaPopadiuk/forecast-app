import { PiArrowClockwiseBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import x from './Cards.module.scss'
import { ToastContainer } from 'react-toastify';
import * as motion from "motion/react-client"


export const Cards = ({ infoCity, detailInfo, hourInfo, weekInfo, userName, refreshCity, setActiveCity, deleteCity, likeCity }) => {

    const [rotations, setRotations] = useState({});

    return (
        <div id="cards" className={`${x.cards} ${infoCity.length === 0 ? x.cards_empty : ''}`}>
            <div className="container">
                <ul className={x.cards__list}>
                    {infoCity.map(item => {

                        const utc = (item.refreshTime || Date.now()) + new Date().getTimezoneOffset() * 60000;
                        const localTime = utc + item.timezone * 1000;
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
                                    <div className={x.cards__btnwrapper}>
                                        <button onClick={() => {
                                            setActiveCity(item)
                                            hourInfo()
                                        }} className={x.cards__btn}>Hourly forecast</button>
                                        {userName && <button onClick={() => {
                                            setActiveCity(item)
                                            weekInfo()
                                        }} className={x.cards__btn}>Weekly forecast</button>}
                                    </div>
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
                                    {/* <p onClick={() => refreshCity(item.name)}><PiArrowClockwiseBold size={30} /></p> */}
                                    <motion.p
                                        className={x.iconWrapper}
                                        animate={{ rotate: rotations[item.id] || 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        onClick={() => {
                                            setRotations(prev => ({
                                                ...prev,
                                                [item.id]: (prev[item.id] || 0) + 360
                                            }));
                                            refreshCity(item.name);
                                        }}
                                    >
                                        <PiArrowClockwiseBold className={x.icon} />
                                    </motion.p>
                                    {/* <p onClick={() => likeCity(item.name)}><ToastContainer />
                                        {item.isLiked ? <FaHeart color="red" size={30} /> : <FaRegHeart fill="red" className={x.icon} />}</p> */}
                                    <motion.p
                                        onClick={() => likeCity(item.name)}
                                        whileTap={{
                                            x: [0, -2, 2, -1, 1, 0],
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {item.isLiked ? (
                                            <FaHeart color="red" size={30} />
                                        ) : (
                                            <FaRegHeart color="red" size={30} />
                                        )}
                                    </motion.p>
                                    <button onClick={() => {
                                        setActiveCity(item)
                                        detailInfo()
                                    }} className={x.cards__btn}>See more</button>
                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                            rotate: [0, -8, 8, -4, 0],
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => deleteCity(item.name)}
                                    >
                                        <RiDeleteBin6Line className={x.icon} />
                                    </motion.div>
                                </div>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </div>
    )
}