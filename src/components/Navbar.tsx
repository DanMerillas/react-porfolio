
import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import NavbarItem from './NavbarItem'




export default function Navbar() {

  const [activeItem, setactiveItem] = useState<number>(1);
  

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <nav>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <span onClick={() => setactiveItem(1)} className={`mt-1 ${activeItem === 1 ? "active" : ""}`}>
              <NavbarItem textItem="Acerca de mi" toLink="/" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(2)} className={`mt-1 ${activeItem === 2 ? "active" : ""}`}>
              <NavbarItem textItem="Tecnologias" toLink="/technologies" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(3)} className={`mt-1 ${activeItem === 3 ? "active" : ""}`}>
              <NavbarItem textItem="Proyectos" toLink="/projects" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(4)} className={`mt-1 ${activeItem === 4 ? "active" : ""}`}>
              <NavbarItem textItem="Habilidades" toLink="/skills" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(5)} className={`mt-1 ${activeItem === 5 ? "active" : ""}`}>
              <NavbarItem textItem="Certificaciones" toLink="/certifications" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(6)} className={`mt-1 ${activeItem === 6 ? "active" : ""}`}>
              <NavbarItem textItem="Chat" toLink="/chat" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
            </span>
            <span onClick={() => setactiveItem(7)} className={`mt-1 ${activeItem === 7 ? "active" : ""}`}>
            <NavbarItem textItem="¡Contáctame!" toLink="/contact" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
          </span>
          </nav>
          

        </div>

        <Outlet />
      </nav>
    </header>
  );
}
