import { useState, useEffect } from "react";
import axios from "axios";

export const useNews = () => {
  const [news, setNews] = useState([]);

  const API =
    "https://newsapi.org/v2/everything?q=pet&apiKey=291747d429c64cd3a73b4b56ac5c9cf3";

  const getAPI = async () => {
    try {
      const response = await axios.get(API);
      setNews(response.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAPI()
  }, [])

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  return { news };
};
