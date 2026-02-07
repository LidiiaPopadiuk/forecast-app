import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export const useFetch = () => {
  const [city, setCity] = useState("Kyiv");
  const [infoCity, setInfoCity] = useState([]);

  const limit = 1;
  const API = useMemo(() => {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=279a527299229b9ffb9e0697e0774806`;
  }, [city, limit]);

  useEffect(() => {
    if (!city) return;

    const apiGet = async () => {
      try {
        const infoFetch = await axios.get(API);
        setInfoCity(prev => {
            if(prev.some(n => n.name === infoFetch.data[0].name)) return prev
            return [...prev, infoFetch.data[0]]
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiGet();
  }, [API, city, limit]);

  useEffect(() => {
    console.log(infoCity);
  }, [infoCity]);

  const inputInfo = (city) => {
    setCity(city);
  };

  return { inputInfo, infoCity };
};
