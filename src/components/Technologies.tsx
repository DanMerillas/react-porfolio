

import { TechnologiesList } from "../Data/data"

export default function Technologies() {
    return (
        <section id="projects" className="text-gray-400 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Aplicaciones que he construido
              </h1>
              
              <p className="text-white">* Pon el cursor sobre las imagenes o haz click en ellas y descubre la description del tipo de proyecto</p>
            </div>
            <div className="flex flex-wrap -m-4">
              {TechnologiesList.map((t) => (
                <span
                  key={t.image}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center imgProject"
                      src={t.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {t.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {t.title}
                      </h1>
                      <p className="leading-relaxed">{t.description}</p>
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </section>
      );
}