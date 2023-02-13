import './App.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { SM_TEC } from './components/SM_TEC.jsx';
import { MisProyectos } from './components/MisProyectos';
import { Footer } from './components/Footer';
function App() {

  return (
    <div className="App" >
      <Header />
      <NavBar />
      <SM_TEC />
      <MisProyectos />
      <Footer />
    </div>
  );
}

export default App;
