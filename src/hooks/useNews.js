// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useNews = () => {
//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [animal, setAnimal] = useState("");

//   const qRequests = [
//     "pet",
//     "pets",
//     "dog",
//     "animals",
//     "birds",
//     "fish",
//     "lizard",
//     "cow",
//     "farm animals",
//   ];

//   useEffect(() => {
//     const savedIndex = localStorage.getItem("newsIndex");
//     const currentIndex = savedIndex ? Number(savedIndex) : 0;
//     const nextIndex = (currentIndex + 1) % qRequests.length;
//     localStorage.setItem("newsIndex", nextIndex);

//     setAnimal(qRequests[currentIndex]);
//   }, []);

//   // const whatAnimal = () => {
//   //   const randomIndex = Math.floor(Math.random() * qRequests.length)
//   //   return qRequests[randomIndex]
//   // }

//   // const API =
//   //   `https://newsapi.org/v2/everything?q=${whatAnimal()}&language=en&apiKey=291747d429c64cd3a73b4b56ac5c9cf3`;

//   // const API = `https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&q=${whatAnimal()}&image_type=photo`

//   // const API = `https://gnews.io/api/v4/search?q=${whatAnimal()}&lang=en&max=8&apikey=adf55da63854e7af9c4124c0888be32c`

//   const getAPI = async () => {
//     if (!animal) return;
//     try {
//       setIsLoading(true);

//       console.log("Request for:", animal);

//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${animal}&pageSize=4&page=${page}&language=en&apiKey=291747d429c64cd3a73b4b56ac5c9cf3`,
//       );

//       const filtered = response.data.articles.filter(
//         (item) => item.url && item.title,
//       );

//       // setNews((prev) => [...prev, ...filtered]);
//       setNews((prev) => [...prev, ...response.data.articles]);
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//       setIsLoading(false);
//     }
//   };

//   const addPage = () => {
//     setPage((prev) => prev + 1);
//   };

//   useEffect(() => {
//     getAPI();
//   }, [page, animal]);

//   // useEffect(() => {
//   //   localStorage.setItem("newsIndex", currentIndex);
//   // }, [currentIndex]);

//   useEffect(() => {
//     console.log("news", news);
//   }, [news]);

//   return { news, addPage, isLoading };
// };




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

  // const whatAnimal = () => {
  //   const randomIndex = Math.floor(Math.random() * qRequests.length)
  //   return qRequests[randomIndex]
  // }

  // const API =
  //   `https://newsapi.org/v2/everything?q=${whatAnimal()}&language=en&apiKey=291747d429c64cd3a73b4b56ac5c9cf3`;

  // const API = `https://pixabay.com/api/?key=53835167-c7d1482498fed66d7f39b6868&q=${whatAnimal()}&image_type=photo`

  // const API = `https://gnews.io/api/v4/search?q=${whatAnimal()}&lang=en&max=8&apikey=adf55da63854e7af9c4124c0888be32c`

  const getAPI = async () => {
    if (!animal) return;
    try {
      setIsLoading(true);

      console.log("Request for:", animal);

      // const response = await axios.get(
      //   `https://gnews.io/api/v4/search?q=${animal}&page=${page}&lang=en&max=4&apikey=adf55da63854e7af9c4124c0888be32c`,
      // );

      // const response = await axios.get(
      //   `https://newsapi.org/v2/everything?q=${animal}&pageSize=4&page=${page}&language=en&apiKey=291747d429c64cd3a73b4b56ac5c9cf3`,
      // );

      // const filtered = response.data.articles.filter(
      //   (item) => item.url && item.title,
      // );

      // setNews((prev) => [...prev, ...filtered]);
      // setNews((prev) => [...prev, ...response.data.articles]);
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

  // useEffect(() => {
  //   localStorage.setItem("newsIndex", currentIndex);
  // }, [currentIndex]);

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  return { news, addPage, isLoading };
};