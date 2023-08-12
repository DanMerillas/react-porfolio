import { porfolioData } from "../Data/data";

export default function ProjectsPorfolio() {
    return (
        <section id="ProjectsPorfolio" className="relative">
            <div className="container py-6 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="text-center mb-10">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Proyectos personales
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Estos son algunos de los proyectos que he realizado en mi tiempo libre, algunos de ellos son proyectos que he realizado para aprender nuevas tecnologías y otros son proyectos que he realizado para mis amigos y familiares.
                    </p>
                </div>

            </div>
            <div className="container mx-auto grid sm:grid-cols-3 grid-cols-1 gap-9 text-center">
                
                    
                { porfolioData.map((porfolio) => (
                        <div key={porfolio.title}>
                            <a href={porfolio.url} title={porfolio.title} target='_blank' rel="noreferrer">
                                <h1 className="title-font text-3xl mt-4 text-white mb-5">{porfolio.title}</h1>
                            <img  src={porfolio.image} alt="SharePoint" className="inline-flex items-center justify-center w-80 h-52 object-cover hover:scale-110" />
                            
                            <p className="leading-relaxed m-5 text-justify sm:h-36">{porfolio.description}</p>
                            </a>
                            <div className="flex flex-wrap gap-2 h-16 m-5">
                            {porfolio.tags.map((tag) => (
                                <p className="bg-blue-500 text-white py-1 px-2 rounded-lg m-1 text-l h-7">#{tag}</p>
                            ))}
                            </div>
                            
                            
                        </div>
                    ))
                }



            </div>

        </section>
    );
}