
import { Link } from 'react-router-dom';

export default function About() {

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                <p className='mb-4 typed-out'>Hola, soy Dani.</p>
                <p className="title-font sm:text-xl text-xl mb-4 text-white">Me encanta programar!! 💻</p>
              </h1>
              <p className="mb-8 leading-relaxed">
              Soy un enamorado de la programación y de la tecnología. Empece en entornos onpremise y desarrollo backend, pero poco a poco estoy evolucionando hacia la nube. <br/>
              Ahora programo tanto backend (Azure functions, demomios, web apis, etc) como frontend (spfx y react en general). <br/>
              Me manejo con Sql y Oracle y, de vez en cuando, hago mis pruebas con Python para temas de automatización.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contacta conmigo
                </Link>
                <Link
                  to="/projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Mira mis trabajos
                </Link>
              </div>
            </div>
            
          </div>
        </section>
      );
}