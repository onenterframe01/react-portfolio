import React from 'react'
import ReactDOM from 'react-dom'
import './css/App.css';
import Interests from './Interests';
import About from './About';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
    <About/>
    <Profile/>
    <Tech/>
    <Portfolio/>
    <Contact/>
   
    </div>
  );
}

export default App;
