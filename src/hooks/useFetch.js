import { useState, useMemo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const useFetch = (userName) => {
  const [city, setCity] = useState("");
  const [infoCity, setInfoCity] = useState(() => {
    try {
      const saved = localStorage.getItem("cards");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      localStorage.removeItem("cards");
      return [];
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
          return [
            ...prev,
            { ...infoFetch.data, id: Date.now(), refreshTime: Date.now() },
          ];
        });
      } catch (err) {
        console.log(err);
      }
    };
    apiGet();
  }, [API]);

  useEffect(() => {
    console.log("infoCity", infoCity);
    localStorage.setItem("cards", JSON.stringify(infoCity));
  }, [infoCity]);

  useEffect(() => {
    if (userName) {
      const saved = localStorage.getItem("cards");
      if (saved) setInfoCity(JSON.parse(saved));
    } else {
      setInfoCity((prev) => prev.map(city => ({...city, isLiked: false})))
    }
  }, [userName]);

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
          city.name === infoFetch.data.name
            ? { ...infoFetch.data, refreshTime: Date.now(), id: city.id }
            : city,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCity = (name) => {
    setInfoCity((prev) => prev.filter((city) => city.name !== name));
  };

  const likeCity = (name) => {
    const notifyLogin = () => toast("Register or Log In");
    const loginInfo = localStorage.getItem("isLoggedIn");

    if (loginInfo) {
      setInfoCity((prev) => {
        const index = prev.findIndex((city) => city.name === name);
        if (index === -1) return prev;

        const updated = [...prev];
        const [selectedCity] = updated.splice(index, 1);

        const newCity = {
          ...selectedCity,
          isLiked: !selectedCity.isLiked,
          savedIndex: selectedCity.savedIndex ? selectedCity.savedIndex : index,
        };

        if (newCity.isLiked) {
          updated.unshift(newCity);
        } else {
          updated.splice(newCity.savedIndex, 0, newCity);
        }

        return updated;
      });
    } else {
      notifyLogin();
    }
  };

  return { inputInfo, infoCity, city, refreshCity, deleteCity, likeCity };
};
