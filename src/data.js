import foto1 from '../src/MCSD App Builder-logo-Blk.png'
import foto2 from '../src/MCSA WebApps-logo-Blk.png'
import c from '../src/csharp.png'
import onpremise from '../src/SPOnPremise.png'
import  online from '../src/Sharepoint_online.png'
import powershell from '../src/pnp.png'

export const projects = [
    {
      title: "c#",
      subtitle: "Desarrollo a medida",
      description:
        "Aplicaciones a medida, tanto web como de escritorio en entornos windows",
      image: c,
    },
    {
      title: "SharePoint onpremise",
      subtitle: "Proyectos con sitios clásicos y c#",
      description:
        "Desarrollo de master pages, layouts, webparts de c#, event receivers, jobs etc. También uso de javascript, jquery y html/css",
      image: onpremise,
    },
    {
      title: "SharePoint online",
      subtitle: "Sitios clásicos y modernos",
      description:
        "Personalización de sitios clásicos (master pages, layouts, javascript/jquery, html/css. Desarrollo sobre sitios modernos con SPfx (React/Typescript). Creación de apps para teams",
      image: online,
    },
    {
      title: "Despliegues personalizados",
      subtitle: "Powershell",
      description:
        "Uso de powershell y pnp powershell para la implementación de las soluciones en los distintos tipos de entornos. En onpremise puedo realizar la instalación de SharePoint y manejo el IIS con soltura",
      image:powershell,
    },
  ];

  export const skills = ['SharePoint onpremise/online', 'c# (.net, net core)', 'SPfx', 'React', 'HTML/CSS', 'SQL', 'CAML', 'Python', 'Power Automate', 'Azure'];

  export const testimonials = [{
    quote:'MCSD 2018',
    image:foto1,
    name:'App builder',
    company:'Microsoft'
  },{
    quote:'MCSA 2018',
    image:foto2,
    name:'WebApplications',
    company:'Microsoft'
  }];
    