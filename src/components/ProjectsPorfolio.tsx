import foto from './../images/Sharepoint_online.png'
import { porfolioData } from "../Data/data";

export default function ProjectsPorfolio() {
    return (
        <section id="ProjectsPorfolio" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="text-center mb-10">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Proyectos personales
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Estos son algunos de los proyectos que he realizado en mi tiempo libre, algunos de ellos son proyectos que he realizado para aprender nuevas tecnologías y otros son proyectos que he realizado para mis amigos y familiares.
                    </p>
                </div>

            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-9 text-center">
                
                    
                { porfolioData.map((porfolio) => (
                        <div>
                            <a href={porfolio.url} title={porfolio.title} target='_blank' rel="noreferrer"><p className="title-font font-medium text-white ">{porfolio.title}</p></a>
                            <p className="leading-relaxed m-5 text-justify sm:h-32">{porfolio.description}</p>
                            <p className="title-font font-small text-white ">{porfolio.tags}</p>
                            <img src={porfolio.image} alt="SharePoint" className="w-50 h-50 inline-flex items-center justify-center" />
                        </div>
                    ))
                }



            </div>

        </section>
    );
}