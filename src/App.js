import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ThemeContext } from './components/context';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Toggle from './components/toggle/Toggle';

function App() {

  const theme = useContext(ThemeContext)
  const DarkMode = theme.state.darkMode
  return (
    <div className="App"  style={{
      backgroundColor: DarkMode? "#222" : "#fff", 
      color: DarkMode && "#fff"
    }}>
    <Toggle />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
