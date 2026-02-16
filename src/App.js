import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Cards } from "./components/cards/Cards";
import { useFetch } from "./hooks/useFetch";
import { useNews } from "./hooks/useNews";
import { useForecast } from "./hooks/useForecast";
import { useGallery } from "./hooks/useGallery";
import { News } from "./components/news/News";
import { Gallery } from "./components/gallery/Gallery";
import { Footer } from "./components/footer/Footer";
import { DetailInfo } from "./components/detail-info/DetailInfo";
import { WeekForecast } from "./components/week-forecast/WeekForecast";
import { HourlyForecast } from "./components/hourly-forecast/HourlyForecast";
import "./App.css";
import { useState } from "react";

function App() {
  const { infoCity, inputInfo, city } = useFetch();
  const { news } = useNews();
  const { nature } = useGallery();
  const { forecast } = useForecast(city);

  const [showDetail, setShowDetail] = useState(false);
  const [showWeek, setShowWeek] = useState(false);
  const [showHour, setShowHour] = useState(false);

  const showDetailInfo = () => {
    console.log("clicked see more");
    setShowDetail((prev) => !prev);
  };
  const showWeekInfo = () => setShowWeek((prev) => !prev);
  const showHourInfo = () => setShowHour((prev) => !prev);

  return (
    <div className="App">
      <Header></Header>
      <Hero inputInfo={inputInfo}></Hero>
      <Cards
        weekInfo={showWeekInfo}
        hourInfo={showHourInfo}
        detailInfo={showDetailInfo}
        infoCity={infoCity}
      ></Cards>
      {showDetail && <DetailInfo infoCity={infoCity}></DetailInfo>}
      {showHour && <HourlyForecast hourlyWeather={forecast}></HourlyForecast>}
      <WeekForecast city={city} infoForecast={forecast}></WeekForecast>
      <News petsInfo={news}></News>
      <Gallery natureInfo={nature}></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
