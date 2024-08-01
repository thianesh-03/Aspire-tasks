// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './Components/user';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

function App() {


  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/user/1'>User 1</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
