import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Route,Switch, Link} from 'react-router-dom'; 
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub } from "react-icons/go";
import About from './pages/about/about';
import resume from './assets/resume.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className='homepage-link'>Cariny Perez</Link>
        <Link to="/about">About</Link>
        <Link to="/resume" onClick={() => window.open(resume)}>Resume</Link>
      </header>
      <div className='line'></div>
      <Switch>
          <Route exact path ='/' component ={HomePage}></Route>
          <Route exact path ='/about' component ={About}></Route>
      </Switch>
      <footer>
        <p>Want to get in touch ?</p>
        <p>Say hello at
        <a href='mailto: perezcariny@gmail.com' target='_blank'>{' perezcariny@gmail.com'}</a>
        </p>
        <p>Learn more about me</p>
        <div className='social-media'>
          <FaInstagram onClick={() =>  window.open('https://www.instagram.com/dancing_broccolii/')}/>
          <GoMarkGithub onClick={() =>  window.open('https://github.com/carinyperez?tab=repositories')}/>
          <FaLinkedin onClick={() =>  window.open('https://www.linkedin.com/in/cariny-perez-88aba478/s')}/>
        </div>
      </footer>
    </div>
  );
}

export default App;
