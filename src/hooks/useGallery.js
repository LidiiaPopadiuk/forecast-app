import axios from "axios";
import { useState, useEffect } from "react";
export const useGallery = () => {
  const [nature, setNature] = useState([]);
  const [qImg, setQImg] = useState("");

  const qRequests = ["nature", "ocean", "river", "forest", "mountain", "cave"];

  useEffect(() => {
    const savedIndex = localStorage.getItem("qImg");
    const currentIndex = savedIndex ? Number(savedIndex) : 0;
    const nextIndex = (currentIndex + 1) % qRequests.length;
    localStorage.setItem("qImg", nextIndex);

    setQImg(qRequests[currentIndex]);
  }, []);

  const API = `https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&per_page=8&min_width=450&q=${qImg}`;

  const getAPI = async () => {
    if (!qImg) return;
    try {
      const nature = await axios.get(API);

      const filtered = nature.data.hits.filter(
        (img) => img.imageWidth >= 800 && img.imageWidth > img.imageHeight,
      );
      setNature(filtered);

      // setNature(nature.data.hits);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("nature", nature);
  }, [nature]);

  useEffect(() => {
    getAPI();
  }, [qImg]);

  return { nature };
};
