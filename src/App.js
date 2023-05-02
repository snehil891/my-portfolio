import './App.css';
import Navigation from './Components/Navigation';
import Profile from './Components/Profile';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <><Navigation title="Snehil Sah" />
      <Profile></Profile>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
    </>

  );
}

export default App;
