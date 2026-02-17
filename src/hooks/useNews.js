import { useState, useEffect } from "react";
import axios from "axios";

export const useNews = () => {
  const [news, setNews] = useState([]);

  const qRequests = ['pet', 'pets', 'cat', 'dog', 'animals', 'birds', 'fish', 'lizard', 'pinguin', 'dolfin', 'cow', 'farm animals']
  
  const whatAnimal = () => {
    const randomIndex = Math.floor(Math.random() * qRequests.length)
    return qRequests[randomIndex]
  }

  const API =
    `https://newsapi.org/v2/everything?q=${whatAnimal()}&language=en&apiKey=291747d429c64cd3a73b4b56ac5c9cf3`;

      // const API = `https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&q=${whatAnimal()}&image_type=photo`

      // const API = `https://gnews.io/api/v4/search?q=${whatAnimal()}&lang=en&max=8&apikey=adf55da63854e7af9c4124c0888be32c`


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
