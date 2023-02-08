import foto1 from '../src/MCSD App Builder-logo-Blk.png'
import foto2 from '../src/MCSA WebApps-logo-Blk.png'
import c from '../src/csharp.png'
import onpremise from '../src/SPOnPremise.png'
import online from '../src/Sharepoint_online.png'
import powershell from '../src/pnp.png'

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
    description: "Personalización de sitios clásicos (master pages, layouts, javascript/jquery, html/css. Desarrollo sobre sitios modernos con SPfx (React/Typescript). Creación de apps para teams",
    image: online,
  },
  {
    title: "Despliegues personalizados",
    subtitle: "Powershell",
    description: "Uso de powershell y pnp powershell para la implementación de las soluciones en los distintos tipos de entornos. En onpremise puedo realizar la instalación de SharePoint y manejo el IIS con soltura",
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
    client: 'Departemento de Seguridad Nacional',
    title: 'Foro de accionistas',
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
    client: 'Departemento de Seguridad Nacional',
    title: 'Foro de accionistas',
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
      url: 'https://www.dsn.gob.es/',
      text: 'Ver cliente'
    }
  },
];