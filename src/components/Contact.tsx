

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Alcala de henares&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DIRECCIÓN
                            </h2>
                            <p className="mt-1">
                                Madrid <br />
                                Alcalá de Henares
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-7 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                CORREO ELECTRÓNICO
                            </h2>
                            <a className="text-indigo-400 leading-relaxed text-sm" href={'mailto:daniel.merillas@gmail.com'}>
                                daniel.merillas@gmail.com
                            </a>
                            {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    NÚMERO DE TELÉFONO
                  </h2> */}
                            <p className="leading-relaxed"></p>
                        </div>
                    </div>
                </div>
                <div

                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        ¡Contáctame!
                    </h2>
                    <br />
                    <p className="leading-relaxed mb-5">
                        Si te interesa mi trabajo o piensas que puedo ayudarte a mejorar en algunas de las tecnologías que utilizo, no te cortes!! Escríbeme y será un placer intentar ayudarte!!
                    </p>
                    <div className="relative mb-4">

                    </div>
                    <p className="leading-relaxed mb-7">
                        Siempre estoy dispuesto a ayudar a un compañero o incluso en aprender algo nuevo.
                    </p>
                    <div className="relative mb-4">

                    </div>

                </div>
            </div>

            
        </section>
    );
}