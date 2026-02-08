import axios from "axios";
import { useState, useEffect } from "react";
export const useGallery = () => {
  const [nature, setNature] = useState([]);
  const API =
    "https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&q=nature";

  const getAPI = async () => {
    try {
      const nature = await axios.get(API);
      setNature(nature.data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("nature", nature);
  }, [nature]);

  useEffect(() => {
    getAPI();
  }, []);

  return { nature };
};
