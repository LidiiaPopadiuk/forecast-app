import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./components/error-page/ErrorPage";
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
import { useTheme } from "./hooks/useTheme";
import { ToastContainer } from "react-toastify";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isEditInfoModal, setIsEditInfoModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showWeek, setShowWeek] = useState(false);
  const [showHour, setShowHour] = useState(false);
  const [activeCity, setActiveCity] = useState(null);
  const [userName, setUserName] = useState(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginTime = localStorage.getItem("loginTime");

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

  const { infoCity, inputInfo, city, refreshCity, deleteCity, likeCity } =
    useFetch(userName);
  const { news, addPage, isLoading } = useNews();
  const { nature } = useGallery();
  const { forecast } = useForecast(activeCity ? activeCity.name : "");

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

  useTheme();

  return (
    <div className="App">
      <Header
        openEditInfoModal={openEditInfoModal}
        userName={userName}
        openSignInModal={openSignInModal}
        openModal={openSignUpModal}
      ></Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
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
                likeCity={likeCity}
                deleteCity={deleteCity}
                setActiveCity={setActiveCity}
                weekInfo={showWeekInfo}
                refreshCity={refreshCity}
                userName={userName}
                hourInfo={showHourInfo}
                detailInfo={showDetailInfo}
                infoCity={infoCity}
              ></Cards>
              {showDetail && activeCity && (
                <DetailInfo
                  city={activeCity}
                  forecast={forecast}
                  infoCity={infoCity}
                ></DetailInfo>
              )}
              {showHour && forecast && forecast.length > 0 && (
                <HourlyForecast hourlyWeather={forecast}></HourlyForecast>
              )}
              {showWeek && forecast && forecast.length > 0 && (
                <WeekForecast
                  city={city}
                  infoForecast={forecast}
                ></WeekForecast>
              )}
              <News
                isLoading={isLoading}
                addPage={addPage}
                petsInfo={news}
              ></News>
              <Gallery natureInfo={nature}></Gallery>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
              />
            </>
          }
        />

        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
