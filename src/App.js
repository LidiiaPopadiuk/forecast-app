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

function App() {
  const { infoCity, inputInfo, city } = useFetch();
  const { news } = useNews();
  const { nature } = useGallery();
  const { forecast } = useForecast(city)

  return (
    <div className="App">
      <Header></Header>
      <Hero inputInfo={inputInfo}></Hero>
      <Cards infoCity={infoCity}></Cards>
      <DetailInfo infoCity={infoCity}></DetailInfo>
      <HourlyForecast hourlyWeather={forecast}></HourlyForecast>
      <WeekForecast city={city} infoForecast={forecast}></WeekForecast>
      <News petsInfo={news}></News>
      <Gallery natureInfo={nature}></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
