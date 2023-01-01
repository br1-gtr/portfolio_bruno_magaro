import './App.css';
import { CardsContainer } from './components/CardsContainer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Tecnologias } from './components/Tecnologias';
import { MisProyectos } from './components/MisProyectos';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <CardsContainer />
      <Tecnologias />
      <MisProyectos />
    </div>
  );
}

export default App;
