import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Cards } from './components/cards/Cards';
import { useFetch } from './hooks/useFetch';
import './App.css';

function App() {

  const {infoCity, inputInfo} = useFetch()

  return (
    <div className="App">
      <Header></Header>
      <Hero inputInfo={inputInfo}></Hero>
      <Cards infoCity={infoCity}></Cards>
    </div>
  );
}

export default App;
