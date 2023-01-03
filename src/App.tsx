import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import yo from './yo.png'

import './App.css';

function App() {

  
  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      <Navbar />
      <div className="container mx-auto flex px-10 pt-10 md:flex-row flex-col items-center">
      <img alt='Daniel Merillas' src={yo} className={'imgYo'}/>
      </div>
      <About />
       <Projects />
      <Skills />
      <Certifications />
     <Contact /> 
    </main>
  );
}

export default App;
