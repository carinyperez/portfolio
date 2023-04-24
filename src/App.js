import './App.css';
import HomePage from './pages/homepage/homepage';
import {Route,Switch, Link} from 'react-router-dom'; 
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub } from "react-icons/go";
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import TaskManager from './components/Posts/TaskManager/taskManager';
import Blog from './pages/blog/blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className='homepage-link'>Cariny Perez</Link>
        <Link to="/projects">Projects</Link>
		<Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Switch>
          <Route exact path ='/' component ={HomePage}></Route>
          <Route exact path ='/about' component ={About}></Route>
          <Route exact path='/projects' component={Projects}></Route>
		  <Route exact path='/blog' component={Blog}></Route>
		  <Route exact path='/blog/task-manager' component={TaskManager}></Route>
      </Switch>
      <footer>
        <p>Want to get in touch ?</p>
        <p> Email me at perezcariny@gmail.com</p>
        <p>Learn more about me</p>
        <div className='social-media'>
          <GoMarkGithub onClick={() =>  window.open('https://github.com/carinyperez?tab=repositories')}/>
          <FaLinkedin onClick={() =>  window.open('https://www.linkedin.com/in/cariny-perez-88aba478/s')}/>
        </div>
      </footer>
    </div>
  );
}

export default App;
