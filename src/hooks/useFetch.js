import { useState, useMemo, useEffect } from "react";
import axios from "axios";

export const useFetch = () => {
  const [city, setCity] = useState("");
  const [infoCity, setInfoCity] = useState(() => {
    try {
      const saved = localStorage.getItem("cards")
    return saved ? JSON.parse(saved) : []
    } catch (err) {
      localStorage.removeItem('cards')
      return []
    }
  });

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
          return [...prev, { ...infoFetch.data, id: Date.now(), refreshTime: Date.now() }];
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiGet();
  }, [API]);

  useEffect(() => {
    console.log("infoCity", infoCity);
    localStorage.setItem('cards', JSON.stringify(infoCity))
  }, [infoCity]);

  const inputInfo = (city) => {
    setCity(city.trim());
  };

  const refreshCity = async (cityName) => {
    try {
      const infoFetch = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=279a527299229b9ffb9e0697e0774806&units=metric&lang=en`,
      );

      setInfoCity((prev) =>
        prev.map((city) =>
          city.name === infoFetch.data.name ? { ...infoFetch.data, refreshTime: Date.now(), id: city.id } : city,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCity = (name) => {
    setInfoCity((prev) => prev.filter((city) => city.name !== name))
  }

  return { inputInfo, infoCity, city, refreshCity, deleteCity };
};
