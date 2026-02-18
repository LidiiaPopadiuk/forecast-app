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
import { EditInfoModal } from "./components/modalEditInfo/EditInfoModal";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isEditInfoModal, setIsEditInfoModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showWeek, setShowWeek] = useState(false);
  const [showHour, setShowHour] = useState(false);
  const [userName, setUserName] = useState(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginTime = localStorage.getItem("loginTime");
    // const storedName = localStorage.getItem("")

    if (!isLoggedIn || !loginTime) return "";

    const now = Date.now();
    const fifteenDays = 15 * 24 * 60 * 60 * 1000;

    if (now - Number(loginTime) > fifteenDays) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loginTime");
      return "";
    }

    return localStorage.getItem("userName" || "");
  });

  const { infoCity, inputInfo, city, refreshCity } = useFetch();
  const { news, addPage, isLoading } = useNews();
  const { nature } = useGallery();
  const { forecast } = useForecast(city);

  // useEffect(() => {
  //   if (userName) {
  //     localStorage.setItem("userName", userName);
  //   }
  // }, [userName]);

  useEffect(() => {
    if (isModalOpen || isSignInOpen || isEditInfoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isSignInOpen, isEditInfoModal]);

  const keyDown = (e) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
      setIsSignInOpen(false);
      setIsEditInfoModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDown);

    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, []);

  const showDetailInfo = () => {
    console.log("clicked see more");
    setShowDetail((prev) => !prev);
  };

  const showWeekInfo = () => setShowWeek((prev) => !prev);
  const showHourInfo = () => setShowHour((prev) => !prev);

  const openSignUpModal = () => setIsModalOpen(true);
  const closeSignUpModal = () => setIsModalOpen(false);

  const openSignInModal = () => {
    setIsSignInOpen(true);
    setIsModalOpen(false);
  };
  const closeSignInModal = () => setIsSignInOpen(false);
  const openEditInfoModal = () => setIsEditInfoModal(true);
  const closeEditInfoModal = () => setIsEditInfoModal(false);

  return (
    <div className="App">
      <Header
        openEditInfoModal={openEditInfoModal}
        userName={userName}
        openSignInModal={openSignInModal}
        openModal={openSignUpModal}
      ></Header>
      <Hero inputInfo={inputInfo}></Hero>
      {isModalOpen && (
        <SignUp
          setUserName={setUserName}
          openModal={openSignInModal}
          closeModal={closeSignUpModal}
        ></SignUp>
      )}
      {isSignInOpen && (
        <SignIn
          setUserName={setUserName}
          closeModal={closeSignInModal}
        ></SignIn>
      )}
      {isEditInfoModal && (
        <EditInfoModal
          setUserName={setUserName}
          closeEditInfoModal={closeEditInfoModal}
        ></EditInfoModal>
      )}
      <Cards
        // weekInfo={showWeekInfo}
        refreshCity={refreshCity}
        userName={userName}
        hourInfo={showHourInfo}
        detailInfo={showDetailInfo}
        infoCity={infoCity}
      ></Cards>
      {showDetail && <DetailInfo infoCity={infoCity}></DetailInfo>}
      {showHour && <HourlyForecast hourlyWeather={forecast}></HourlyForecast>}
      {showWeek && <WeekForecast city={city} infoForecast={forecast}></WeekForecast>}
      <News isLoading={isLoading} addPage={addPage} petsInfo={news}></News>
      <Gallery natureInfo={nature}></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
