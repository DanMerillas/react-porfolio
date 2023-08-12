import foto1 from '../../src/images/MCSD App Builder-logo-Blk.png'
import foto2 from '../../src/images/MCSA WebApps-logo-Blk.png'
import c from '../../src/images/csharp.png'
import onpremise from '../../src/images/SPOnPremise.png'
import online from '../../src/images/Sharepoint_online.png'
import powershell from '../../src/images/pnp.png'
import series from '../../src/images/Buscador series.png'
import precios from '../../src/images/Comparador de precios.png'
import pokedex from '../../src/images/Pokedex.png'
import pokecards from '../../src/images/PokemonCards.png'
import portfolio from '../../src/images/porfolio.png'
import weather from '../../src/images/weather.png'

export const TechnologiesList = [{
    title: "c#",
    subtitle: "Desarrollo a medida",
    description: "Aplicaciones a medida, tanto web como de escritorio en entornos windows",
    image: c,
  },
  {
    title: "SharePoint onpremise",
    subtitle: "Proyectos con sitios clásicos y c#",
    description: "Desarrollo de master pages, layouts, webparts de c#, event receivers, jobs etc. También uso de javascript, jquery y html/css",
    image: onpremise,
  },
  {
    title: "SharePoint online",
    subtitle: "Sitios clásicos y modernos",
    description: "Personalización de sitios clásicos (master pages, layouts, javascript/jquery, html/css. Desarrollo sobre sitios modernos con SPfx (React/Typescript). Creación de apps para teams, azure functions, power automate, etc.",
    image: online,
  },
  {
    title: "Despliegues personalizados",
    subtitle: "Powershell",
    description: "Uso de powershell y pnp powershell para la implementación de las soluciones en los distintos tipos de entornos. En on-premise puedo realizar la instalación de SharePoint y conozco las configuraciones principales del IIS",
    image: powershell,
  },
];

export const skills = ['SharePoint onpremise/online', 'c# (.net, net core)', 'SPfx', 'React', 'HTML/CSS', 'SQL', 'CAML', 'Python', 'Power Automate', 'Azure', 'JQuery', 'Javascript', 'TypeScript', 'Soap', 'Rest', 'Agile', 'Scrum', 'LINQ'];

export const testimonials = [{
  quote: 'MCSD 2018',
  image: foto1,
  name: 'App builder',
  company: 'Microsoft'
}, {
  quote: 'MCSA 2018',
  image: foto2,
  name: 'WebApplications',
  company: 'Microsoft'
}];

export const projectsList = [
  {
    client: 'Adime',
    title: 'Adime',
    position: 'Arquitecto',
    text: 'Migracioón de herramienta de envio masivo de correos a SharePoint online con spfx',
    date: '2023 - Actualidad',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://adime.org/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'MasMovil',
    title: 'MasGestDoc',
    position: 'Arquitecto',
    text: 'Gestor documental en sharepoint online con spfx',
    date: '2022 - Actualidad',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.masmovil.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Técnicas reunidas',
    title: 'Intranet (DWP)',
    position: 'Arquitecto',
    text: 'Digital work place desarrollado en sharePoint online con producto y componentes a medidas spfx',
    date: '2022-2023',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.tecnicasreunidas.es/es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'HTBA',
    title: 'Intranet (DWP)',
    position: 'Arquitecto',
    text: 'Digital work place desarrollado en sharePoint online con spfx adaptado a dispositivos moviles',
    date: '2022',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://htba.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'TKE',
    title: 'Migración intranets',
    position: 'Arquitecto',
    text: 'Migración de las intranets de 2010 a SharePoint online con ShareGate, desarrollo de WebApi y power Automate',
    date: '2022',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.tkelevator.com/es-es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Acciona',
    title: 'Perfil de contratista',
    position: 'Arquitecto',
    text: 'Portal público para la solicitud de participación de los proveedores en las licitaciones. Sharepoint on-premise con integraciones con Procur-e',
    date: '2021 - 2022',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://contractorprofile.acciona.com/',
      text: 'Ver portal'
    }
  },
  {
    client: 'Acciona',
    title: 'Clientes premium',
    position: 'Arquitecto',
    text: 'Portal visualización de consumos, huella de carbono, OMPI y OMIE para los clientes premium realizado sobre SharePoint on-premise',
    date: '2021 - 2022',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.acciona.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Acciona',
    title: 'Mapa de procesos',
    position: 'Arquitecto',
    text: 'Gestor documental de acciona energia con flujos de trabajo y noticaciones realizado sobre SharePoint online',
    date: '2021 - 2022',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.acciona.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Minsait',
    title: 'Referencias',
    position: 'Arquitecto',
    text: 'Gestión de la referencias para ofertas por departamentos, sobre SharePoint online con integración con Teams',
    date: '2020',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.minsait.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'AECC',
    title: 'Intranet',
    position: 'Arquitecto',
    text: 'Intranet de la asociación sobre SharePoint online con spfx, microsoft Graph y power automate',
    date: '2020',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.contraelcancer.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Intrum',
    title: 'Intranet',
    position: 'Arquitecto',
    text: 'Aplicación para la gestión y autorización de los gastos de empleados de la empresa sobre SharePoint online',
    date: '2020',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.intrum.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Minsait',
    title: 'Hecho relevantes',
    position: 'Arquitecto',
    text: 'Aplicación para la gestión de los Hechos Relevantes de la empresa para su uso en Ofertas, sobre Sharepoint Online',
    date: '2019',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.minsait.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Acciona',
    title: 'Gestión documental de proyectos',
    position: 'Arquitecto',
    text: 'Aplicación para la gestión y seguimiento de los distintos proyectos de acciona Energia, sobre Sharepoint Online',
    date: '2019',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.acciona.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Acciona',
    title: 'Gestión de solicitudes',
    position: 'Arquitecto',
    text: 'Aplicación para la gestión y seguimiento de las solicitudes a las distintas administraciones. Flujos de firma, tareas de seguiemiento,etc, sobre Sharepoint Online',
    date: '2019',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.acciona.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'ICEX',
    title: 'Barreras comerciales',
    position: 'Programador Senior',
    text: 'Cambio del look and feel del portal publico para homogenizar con el resto de portales he implementación de nuevas funcionalidades, sobre Sharepoint on-premise',
    date: '2018',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://barrerascomerciales.comercio.gob.es/',
      text: 'Ver portal'
    }
  },
  {
    client: 'Enresa',
    title: 'Mantenimiento aplicaiones SP 2013',
    position: 'Programador Senior',
    text: 'Gestión y resolución de incidencias de la compañía sobre plataforma SharePoint 2013',
    date: '2017',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.enresa.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'CDTI',
    title: 'Mantenimiento intranet y gestor documental SP 2013',
    position: 'Programador Senior',
    text: 'Gestión y resolución de incidencias de los aplicativos de intranet y gestor documental de la compañía sobre plataforma SharePoint 2013',
    date: '2017',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.cdti.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Abante',
    title: 'Consultoría 365',
    position: 'Consultor 365 Senior',
    text: 'Consultorías sobre el estado actual de cliente y propuesta de "TO BE". Se realiza un pequeño Quick Win como ejemplo de uso de Office 365 para grupos de colaboración departamentales',
    date: '2016',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.abanteasesores.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Endesa',
    title: 'Gesdoc',
    position: 'Programador Senior',
    text: 'Gestión y resolución de incidencias y peticiones del gestor documental desarrollado sobre SharePoint 2010',
    date: '2016',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.endesa.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Endesa',
    title: 'Migración de aplicaciones a entornos cloud',
    position: 'Experto',
    text: 'Migración de las aplicaciones Endesa.com, PCI (portal corporativo internacional),  ECOS y Riesgos Patrimoniales, de entonos on-premise a entornos cloud (AWS y softlayer)',
    date: '2016',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.endesa.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'AMETIC',
    title: 'Intranet / Extranet',
    position: 'Arquitecto',
    text: 'Arquitecto en el proyecto de la intranet de AMETIC y la extranet de colaboración con asociados. Configuración de elementos OOTB y creación de APPs a medida',
    date: '2015',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://ametic.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'ISBAN',
    title: 'Foro de accionistas',
    position: 'Arquitecto',
    text: 'Microsoft SharePoint Server 2013, ADFS Arquitecto y responsable tecnológico en la nueva aplicación de "Foro de accionistas" basado en las capacidades de sitios de comunidad de SharePoint 2013',
    date: '2015',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.linkedin.com/company/isban/?originalSubdomain=es',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Seguridad Nacional',
    title: 'Gestión de escenarios',
    position: 'Arquitecto',
    text: 'Solución para la gestión de escenarios de maniobras, emergencias ,etc. Integración de visores GIS y creación automatizada de escenarios',
    date: '2015',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.dsn.gob.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Indra',
    title: 'GDOP',
    position: 'Programador Senior',
    text: ' gestor documental de la compañia desarrollado sobre SharePoint on-premise',
    date: '2014 - 2015',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.indracompany.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Indra',
    title: 'Intranet',
    position: 'Programador Senior',
    text: 'Responsable técnico, dentro del proyecto de transformación global de Indra bajo la plataforma SharePoint 2013 del módulo de Red Profesional como elemento fundamental en la mejora de la productividad. Coordinación con el resto de iniciativas de Intranet',
    date: '2013 - 2014',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.indracompany.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'TELECOM',
    title: 'Migracion portal Telecom Italia',
    position: 'Programador Senior',
    text: 'Migración de la intranet de Telecom italia de un entorno sharepoint 2010 a 2013 migrando el resto de aplicaciones enlazadas en la intranet a asp.net',
    date: '2013 - 2014',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    }
  },
  {
    client: 'INVERSIS',
    title: 'Intranet',
    position: 'Programador',
    text: 'Definición de un nuevo modelo de Intranet para INVERSIS basado en enfoques Enterprise 2.0. Implantación de primera maqueta productiva de la Intranet sobre plataforma SharePoint 2013',
    date: '2013 - 2014',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.inversis.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Universidad Pontificia Comillas',
    title: 'Intranet',
    position: 'Programador',
    text: 'Desarrollo e implantación de la Intranet Corporativa U.P. Comillas',
    date: '2012 - 2013',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.comillas.edu/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Ministerio de Defensa',
    title: 'Gestión de Proyectos (POC)',
    position: 'Programador',
    text: 'POC para la gestión de proyectos en el Ministerio de  Defensa. Grupos de proyecto, Timeline de actividad y gestión documental',
    date: '2012',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.defensa.gob.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'BANKIA',
    title: 'Sistema de Gestión de Proyectos',
    position: 'Programador',
    text: 'Implantación de una solución de gestión de proyectos corporativos que de soporte a la gestión de proyectos. Creación programatica de documento mpp en base a XML',
    date: '2011',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://www.caixabank.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'Enel',
    title: 'Sistema de Gestión de Proyectos / Documental',
    position: 'Programador',
    text: 'Implantación de una solución de gestión de proyectos corporativos integrada al ERP corporativo (Navision, SAP) que de soporte a la gestión de proyectos y documental de la división de Tecnología e Ingeniería de Gas Natural',
    date: '2011',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://naturgytarifas.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'ENDESA',
    title: 'Endesa.com',
    position: 'Programador',
    text: 'Implantación de la web publica Endesa.com en plataforma Sharepoint 2007, integración con sistemas externos',
    date: '2011',
    category: {
      tag: 'INDRA',
      color: '#018f69'
    },
    link: {
      url: 'https://Endesa.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'SIEMENS',
    title: 'MADAM',
    position: 'Programador',
    text: 'Aplicativo para la gestión de proovedores, participación internacional. Uso de tecnología Entity Framework y LINQ',
    date: '2010',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://new.siemens.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'YELL',
    title: 'Web Builder',
    position: 'Programador',
    text: 'Implantación de una capa de acceso a datos utilizando Enterprise Library e integración con Oracle 9.0',
    date: '2010',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://www.paginasamarillas.es/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'ISBAN',
    title: 'Secreatría',
    position: 'Programador',
    text: 'Proyecto para la automatización de procesamiento de correo utilizando las capacidades de Sharepoint. Add in de Outlook para integrar con la plataforma',
    date: '2010',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://www.linkedin.com/company/isban/?originalSubdomain=es',
      text: 'Ver cliente'
    }
  },
  {
    client: 'FEDIT',
    title: 'Fedit.com',
    position: 'Programador',
    text: 'Proyecto para la automatización de procesamiento de correo utilizando las capacidades de Sharepoint. Add in de Outlook para integrar con la plataforma',
    date: '2009 - 2010',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://fedit.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'TECHNOSITE',
    title: 'Consorci de serveis Socials de Barcelona',
    position: 'Programador',
    text: 'Implanteción de la web publica para el Consorci de serveis Socials de Barcelona con tecnología Sharepoint 2007',
    date: '2009',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://tecnoaccesible.net/directorio/technosite',
      text: 'Ver cliente'
    }
  },
  {
    client: 'SIEMENS',
    title: 'Intranet',
    position: 'Programador',
    text: 'Soporte para los usuario en el uso de la nueva intranet. Resolución de incidencia y ejecución de mejoras',
    date: '2009',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://new.siemens.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'TERRA',
    title: 'Invertia',
    position: 'Programador',
    text: 'Entorno Tecnológico: ASP 2.0 Consultoría para la mejora de la web de inversiones de Terra',
    date: '2008 - 2009',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://www.terra.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'IBERWORLD',
    title: 'Intranet Prosegur Activa',
    position: 'Programador Junior',
    text: 'Migración de la intranet de Iberworld de las versiones de sharepoint 2003 a 2007',
    date: '2008',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
  },
  {
    client: 'PROSEGUR',
    title: 'Intranet Prosegur Activa',
    position: 'Programador Junior',
    text: 'Instalación, configuración y personalización del producto. Formación sobre plataformas Sharepoint 2007',
    date: '2007 - 2008',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://new.siemens.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'VASS',
    title: 'VASSDESK',
    position: 'Programador Junior',
    text: 'Instalación, configuración y personalización del producto. Aplicación CMMI para la gestión de proyecto de VASS',
    date: '2007',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://vasscompany.com/',
      text: 'Ver cliente'
    }
  },
  {
    client: 'TERRA',
    title: 'Manteniento',
    position: 'Programador Junior',
    text: 'Creación de un entorno “laboratorio” para el desarrollo de mejoras sobre la aplicación de Terra. Mantenimiento de la actual herramienta e implementación de mejoras',
    date: '2007',
    category: {
      tag: 'VASS',
      color: '#0000FF'
    },
    link: {
      url: 'https://www.terra.com/',
      text: 'Ver cliente'
    }
  },
];
export const porfolioData = [
  {
    title: 'Aplicación del tiempo',
    url: 'https://danmerillas.github.io/weather-app/',
    description: 'Aplicación del tiempo con la api de openweathermap.org, busca el tiempo de cualquier ciudad del mundo, muestra el tiempo actual y el de los próximos 5 días',
    image: weather,
    tags: ['React', 'API', 'Geolocalización', 'Github Pages'],
  }, 
  {
  title: 'Porfolio profesional',
  url: 'https://daniel-merillas.netlify.app/',
  description: 'Web con mis datos personales y profesionales. Muestra mis proyectos y mis habilidades. Usa un chatbot para contactar conmigo y saber algo mas de mi.',
  image: portfolio,
  tags: ['React', 'Tailwind', 'Chatbot', 'Supabase', 'Router', 'Netlify'],
}, 
{
  title: 'Pokedex de Aarón',
  url: 'https://aaron-pokemons.netlify.app/',
  image: pokedex,
  description: 'Muestra en formato carta, pokemons de manera aleatoria usando la pokeapi https://pokeapi.co/, tiene un buscador para encontrar el pokemon que quieras y un apartados de favoritos. Usa supabase para almacenar los favoritos',
  tags: ['React', 'Supabase', 'API', 'Netlify'],
},
{
  title: 'Cartas pokemon',
  url: 'https://danmerillas.github.io/PokemonCards/',
  image: pokecards,
  description: 'Usa el api https://api.tcgdex.net que contiene una bbdd con las principales cartas pokemon. Tiene un buscador de cartas y permite filtrarlas por serie.',
  tags: ['React', 'Supabase', 'API', 'Github Pages'],
},
{
  title: 'Comparador de precios',
  url: 'https://comparadorprecios.netlify.app',
  image: precios,
  description: 'Permite almacenar el precio de productos de diferentes supermercados y compararlos, tiene un buscador para encontrar el producto que quieras. Usa supabase para almacenar los precios, productos y supermercados',
  tags: ['React', 'Supabase', 'Material UI', 'ReactDatatable', 'Netlify'],
},
{
  title: 'Buscador de peliculas y series',
  url: 'https://netflixdani-jesi.netlify.app',
  image: series,
  description: 'Muestra en formato carta pokemons de manera aleatoria usando la pokeapi https://pokeapi.co/, tiene un buscador para encontrar el pokemon que quieras y un apartados de favoritos. Usa supabase para almacenar los favoritos',
  tags: ['React', 'Supabase', 'API', 'Netlify'],
},
];