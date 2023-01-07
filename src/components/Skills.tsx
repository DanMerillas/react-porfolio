
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-10">
              
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Habilidades y Tecnologías
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Tengo facilidad para aprender cosas nuevas y me encantan los nuevos retos!! <br/>
                Soy una persona muy sociable, trato de mantener siempre un buen ambiente de trabajo con compañeros y clientes y la colaboración es la base de mi vida.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center cajas">
                    
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}