import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export const useFetch = () => {
  const [city, setCity] = useState("Kyiv");
  const [infoCity, setInfoCity] = useState([]);

  const API = useMemo(() => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=279a527299229b9ffb9e0697e0774806&units=metric&lang=en`;
  }, [city]);

  useEffect(() => {
    if (!city) return;

    const apiGet = async () => {
      try {
        const infoFetch = await axios.get(API);
        setInfoCity((prev) => {
          if (prev.some((n) => n.name === infoFetch.data.name)) return prev;
          return [...prev, infoFetch.data];
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiGet();
  }, [API, city]);

  useEffect(() => {
    console.log(infoCity);
  }, [infoCity]);

  const inputInfo = (city) => {
    setCity(city);
  };

  return { inputInfo, infoCity };
};
