import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Route,Switch, Link} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className='homepage-link'>Cariny Perez</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </header>
      <div className='line'></div>
      <Switch>
          <Route exact path ='/' component ={HomePage}></Route>
          <Route exact path ='/about' component ={HomePage}></Route>
          <Route exact path ='/resume' component ={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
