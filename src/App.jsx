import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <CardsContainer />
    </div>
  );
}

export default App;
