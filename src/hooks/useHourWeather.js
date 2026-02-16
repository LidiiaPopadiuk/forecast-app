import { useState, useEffect } from "react";
import axios from "axios";

export const useHourWeather = (city) => {

    const [hourWeather, setHourWeather] = useState([])

    const API = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=279a527299229b9ffb9e0697e0774806&units=metric&lang=en`

    useEffect(() => {
        if(!city) return 

        const getAPI = async() => {
            try {
               const response = await axios.get(API)
               setHourWeather(response.data)
            } catch(err) {
                console.log(err);
            }
        }
        getAPI()
    }, [city])

    return { hourWeather }
}