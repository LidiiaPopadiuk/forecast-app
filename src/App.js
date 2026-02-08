import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Cards } from './components/cards/Cards';
import { useFetch } from './hooks/useFetch';
import { useNews } from './hooks/useNews'
import { News } from './components/news/News';
import './App.css';

function App() {

  const {infoCity, inputInfo} = useFetch()
  const { news } = useNews()

  return (
    <div className="App">
      <Header></Header>
      <Hero inputInfo={inputInfo}></Hero>
      <Cards infoCity={infoCity}></Cards>
      <News petsInfo={news}></News>
    </div>
  );
}

export default App;
