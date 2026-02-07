import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Cards } from './components/cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Cards></Cards>
    </div>
  );
}

export default App;
