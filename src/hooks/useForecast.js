import { useState, useEffect } from "react";
import axios from "axios";

export const useForecast = (city) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!city) return;

    const forecastFetch = async () => {
      try {
        const apiFetch = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=279a527299229b9ffb9e0697e0774806`,
        );
        setForecast(apiFetch.data.list)
      } catch (err) {
        console.log(err);
      }
    };

    forecastFetch()
  }, [city]);

  return { forecast }
};
