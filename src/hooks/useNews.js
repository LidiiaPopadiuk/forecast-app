import { useState, useEffect } from "react";
import axios from "axios";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [animal, setAnimal] = useState("");

  const qRequests = [
    "pet",
    "pets",
    "dog",
    "animals",
    "birds",
    "fish",
    "lizard",
    "cow",
    "farm animals",
  ];

  useEffect(() => {
    const savedIndex = localStorage.getItem("newsIndex");
    const currentIndex = savedIndex ? Number(savedIndex) : 0;
    const nextIndex = (currentIndex + 1) % qRequests.length;
    localStorage.setItem("newsIndex", nextIndex);

    setAnimal(qRequests[currentIndex]);
  }, []);

  const whatAnimal = () => {
    const randomIndex = Math.floor(Math.random() * qRequests.length);
    return qRequests[randomIndex];
  };

  const getAPI = async () => {
    if (!animal) return;
    try {
      setIsLoading(true);

      console.log("Request for:", animal);

      const response = await axios.get(
        `https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&per_page=8&min_width=450&per_page=4&page=${page}&q=${animal}`,
      );

      setNews((prev) => [...prev, ...response.data.hits]);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const addPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    getAPI();
  }, [page, animal]);

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  return { news, addPage, isLoading };
};
