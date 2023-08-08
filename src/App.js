import './App.css';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import { NavBar } from './Components/Navbar_comg';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Navigation title="Snehil Sah" /> */}
    <HashRouter>
    <NavBar/>
    <section id="profile">
        <Profile />
      </section>
      <section id="edu">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </HashRouter>
    </>

  );
}

export default App;
