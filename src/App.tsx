import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

      <div className="container mx-auto flex md:flex-row flex-col items-center">
      <img alt='Daniel Merillas' src={yo} className={'imgYo'}/>
      </div>
      
      <BrowserRouter>
      <Routes>
      <Route key={'nav'} path="/" element={<Navbar />}>
          <Route key={'about'} index  element={<About />}></Route>
          <Route key={'projects'} path="/projects" element={<Projects />}></Route>
          <Route key={'skills'} path="/skills" element={<Skills />} />
          <Route key={'certifications'} path="/certifications" element={<Certifications />} />
          <Route key={'contact'} path="/contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
