import { Link } from "react-router-dom";

export const IA_ENDPOINT = 'https://api.cohere.ai/classify'

export const EXAMPLES = [{"text": "Hola", "label": "Saludo"}, {"text": "Que tal?", "label": "Saludo"}, {"text": "Como estas?", "label": "Saludo"}, {"text": "Adios", "label": "Despedida"}, {"text": "Bye", "label": "Despedida"}, {"text": "asd", "label": "unkown"}, {"text": "asdasdasd", "label": "unkown"}, {"text": "djfh dsjfdsj fjsd", "label": "unkown"}, {"text": "no te entiendo", "label": "unkown"}, {"text": "test", "label": "unkown"}, {"text": "puto", "label": "Palabrota"}, {"text": "Cabrón", "label": "Palabrota"}, {"text": "Joder", "label": "Palabrota"}, {"text": "Mierda", "label": "Palabrota"}, {"text": "Proyectos", "label": "Proyectos"}, {"text": "En cuantos proyectos has trabajado", "label": "Proyectos"}, {"text": "telefono", "label": "Contacto"}, {"text": "contacto", "label": "Contacto"}, {"text": "Entrevista", "label": "Contacto"}, {"text": "dinero", "label": "Salario"}, {"text": "expectativa salarial", "label": "Salario"},  {"text": "cambio laboral", "label": "Cambio"}, {"text": "nuevas oportunidades", "label": "Cambio"}, {"text": "busqueda activa", "label": "Cambio"}, {"text": "cambio laboral", "label": "Cambio"}, {"text": "ayuda programación", "label": "Ayuda"}, {"text": "duda de código", "label": "Ayuda"},  {"text": "ayuda", "label": "Ayuda"}]

export const ANSWERS = {
    Saludo: (
      <p>Hola, encantado de conocerte. Pregunta e intentaré ayudarte</p>
    ),
    Despedida: (
      <p>Adios, A sido un placer hablar contigo</p>
    ),
    Palabrota: (
      <p>Veo que utilizas palabras mal sonantes, espero no haberte enfadado</p>
    ),
    Proyectos: (
      <p>He participado en mas de 45 proyectos desde 2007. Puedes ver todos ellos desde el apartado <Link className="font-medium text-blue-600 dark:text-blue-800 hover:underline"
      to="/projects"
      >Proyectos</Link></p>
    ),
    Contacto: (
      <p>Si quieres que hablemos puede escribirme al correo que encontrarás en la sección <Link className="font-medium text-blue-600 dark:text-blue-800 hover:underline"
      to="/contact"
      >Contanto</Link> o puedes hablar conmigo por linkedIn (Enlace en el pie de la página)</p>
    ),
    Salario: (
      <p>Por supuesto, un aspecto importante a la hora de plantearme un cambio laboral, es el salario pero no es el único en lo que me fijo. Contactame y podremos concretar eso y otros aspectos de la oferta que puedan ser de interés (Teletrabajo, formación, beneficios sociales, etc)</p>
    ),
    Cambio: (
      <p>No estoy en busqueda activa, pero nunca me cierro a nuevas metas laborales u oportunidades que puedan ser interesantes a nivel profesional o personal</p>
    ),
    Ayuda: (
      <p>Siempre es un placer intentar ayudar a un compañero. Si lo necesitas puedes escribirme por <a className="font-medium text-blue-600 dark:text-blue-800 hover:underline" href="mailto:daniel.merillas@gmail.com">correo</a></p>
    ),
    unkown: (
      <p>Lo siento, no te entendi. Intenta preguntar otra cosa y disculpa las molestias</p>
    )
  }

  export const AUTH_IA = "Bearer yzqwylUqvYEczDeZ30Xr1KIEdriZ3swqswgbNCi0"