
import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import NavbarItem from './NavbarItem'




export default function Navbar() {

  const [activeItem, setactiveItem] = useState<number>(1);

  const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    menu?.classList.toggle('hidden');
    menu?.classList.toggle('w-full');
    menu?.classList.toggle('h-screen');
  }

  const hideMenu = () => {
    const menu = document.querySelector('#menu');
    menu?.classList.add('hidden');
    menu?.classList.remove('w-full');
    menu?.classList.remove('h-screen');
  }

  const clickItem = (position:number) => {
    setactiveItem(position)
    hideMenu()
  }


  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
     
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">


          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base">
            <ul id="menu" className="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

              <li className="md:hidden z-90 fixed top-4 right-6">
                <span className="text-right text-white text-4xl" onClick={toggleMenu}
                >&times;</span>
              </li>

              <li>
                <span onClick={() => clickItem(1)} className={`mt-1 ${activeItem === 1 ? "active" : ""}`}>
                  <NavbarItem textItem="Acerca de mi" toLink="/" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(2)} className={`mt-1 ${activeItem === 2 ? "active" : ""}`}>
                  <NavbarItem textItem="Tecnologías" toLink="/technologies" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(3)} className={`mt-1 ${activeItem === 3 ? "active" : ""}`}>
                  <NavbarItem textItem="Proyectos" toLink="/projects" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>

              <li>
                <span onClick={() => clickItem(4)} className={`mt-1 ${activeItem === 4 ? "active" : ""}`}>
                  <NavbarItem textItem="Habilidades" toLink="/skills" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(5)} className={`mt-1 ${activeItem === 5 ? "active" : ""}`}>
                  <NavbarItem textItem="Certificaciones" toLink="/certifications" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(6)} className={`mt-1 ${activeItem === 6 ? "active" : ""}`}>
                  <NavbarItem textItem="Proyectos personales" toLink="/chat" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(6)} className={`mt-1 ${activeItem === 6 ? "active" : ""}`}>
                  <NavbarItem textItem="Chat (Beta)" toLink="/chat" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
              <li>
                <span onClick={() => clickItem(7)} className={`mt-1 ${activeItem === 7 ? "active" : ""}`}>
                  <NavbarItem textItem="Contacto!" toLink="/contact" itemClassName="mr-5 bg-gray-800 border-0 py-1 px-1 focus:outline-none hover:bg-gray-700 rounded" />
                </span>
              </li>
            </ul>


            <div className="flex items-center md:hidden">
              <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300" onClick={toggleMenu}>
                &#9776;
              </button>
            </div>
          </nav>


        </div>

        <Outlet />
     
    </header>
  );
}
