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
import { SignUp } from "./components/modals/SignUp";
import { SignIn } from "./components/modals/SignIn";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  const { infoCity, inputInfo, city } = useFetch();
  const { news, addPage, isLoading } = useNews();
  const { nature } = useGallery();
  const { forecast } = useForecast(city);

  const [showDetail, setShowDetail] = useState(false);
  const [showWeek, setShowWeek] = useState(false);
  const [showHour, setShowHour] = useState(false);


  useEffect(() => {
    if (isModalOpen || isSignInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isSignInOpen]);


  const showDetailInfo = () => {
    console.log("clicked see more");
    setShowDetail((prev) => !prev);
  };

  const showWeekInfo = () => setShowWeek((prev) => !prev);
  const showHourInfo = () => setShowHour((prev) => !prev);

  const openSignUpModal = () => setIsModalOpen(true);
  const closeSignUpModal = () => setIsModalOpen(false);

  const openSignInModal = () => {
    setIsSignInOpen(true)
    setIsModalOpen(false)
  }
  const closeSignInModal = () => setIsSignInOpen(false)


  return (
    <div className="App">
      <Header openModal={openSignUpModal}></Header>
      <Hero inputInfo={inputInfo}></Hero>
      {isModalOpen && <SignUp openModal={openSignInModal} closeModal={closeSignUpModal}></SignUp>}
      {isSignInOpen && <SignIn closeModal={closeSignInModal}></SignIn>}
      <Cards
        weekInfo={showWeekInfo}
        hourInfo={showHourInfo}
        detailInfo={showDetailInfo}
        infoCity={infoCity}
      ></Cards>
      {showDetail && <DetailInfo infoCity={infoCity}></DetailInfo>}
      {showHour && <HourlyForecast hourlyWeather={forecast}></HourlyForecast>}
      <WeekForecast city={city} infoForecast={forecast}></WeekForecast>
      <News isLoading={isLoading} addPage={addPage} petsInfo={news}></News>
      <Gallery natureInfo={nature}></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
