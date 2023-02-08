import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import yo from './yo.png'


import './App.css';
import ProjectsTimeline from './components/ProjectsTimeline';
import Technologies from './components/Technologies';



function App() {


  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      <div className="container mx-auto flex md:flex-row flex-col">
        <div className="flex">
          <div className="rounded flex pr-9 h-full">
            <img alt='Daniel Merillas' src={yo} className={'imgYo'} />
          </div>
          <div className="rounded flex pl-9 h-full items-center tituloPag">
            <label className='title-font sm:text-4xl text-3xl mt-4 text-white' title='Daniel Merillas'><strong>Daniel Merillas Gonzalo</strong></label>
          </div>

        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route key={'nav'} path="/" element={<Navbar />}>
            <Route key={'about'} path="/" element={<About />}></Route>
            <Route key={'technologies'} path="/technologies" element={<Technologies />}></Route>
            <Route key={'projects'} path="/projects" element={<ProjectsTimeline />}></Route>
            <Route key={'skills'} path="/skills" element={<Skills />} />
            <Route key={'certifications'} path="/certifications" element={<Certifications />} />
            <Route key={'contact'} path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </main>
  );
}

export default App;
