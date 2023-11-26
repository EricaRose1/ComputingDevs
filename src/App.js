
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='Contact' element={ <Contact /> } />
            <Route exact path='Projects' element={ <Projects /> } />
            <Route exact path='Skills' element={ <Skills /> } />
      </Routes>
    </div>
  );
}

export default App;
