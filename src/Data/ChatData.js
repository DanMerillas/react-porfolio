import {
  Link
} from "react-router-dom";
import {
  createClient
} from '@supabase/supabase-js';

export const AUTH_IA = process.env.REACT_APP_API_KEY || ''



export const IA_ENDPOINT = 'https://api.cohere.ai/classify'


export async function readIAExamples() {
  const DB_KEY = process.env.DB_AP_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dWh6eWdyZ3FmamptZmlqcXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NDMwNTAsImV4cCI6MTk5MzAxOTA1MH0.C89f_MQdIJn42HQNN9kO8ed_JJpHEr260vArr3pw_yA"
  const DB_URL = process.env.DB_AP_URL || "https://wuuhzygrgqfjjmfijqzr.supabase.co"

  const supabase = createClient(DB_URL, DB_KEY)
  const resultTot = await supabase.from('Examples').select()

  return resultTot.data
}

export const ANSWERS = {
  Saludo: (<p>Hola, encantado de conocerte. Pregunta sobre Dani e intentaré ayudarte</p>),
  Despedida: ( <p>Adios, A sido un placer hablar contigo</p>
  ),
  Palabrota: (<p>Veo que utilizas palabras mal sonantes, espero no haberte enfadado</p>),
  Proyectos: (<p>He participado en mas de 40 proyectos desde 2007. Puedes ver todos ellos desde el apartado <Link className = "font-medium text-blue-600 dark:text-blue-800 hover:underline"
    to = "/projects">Proyectos</Link></p>  ),
  Contacto: (<p>Si quieres que hablemos puede escribirme al correo que encontrarás en la sección <Link className = "font-medium text-blue-600 dark:text-blue-800 hover:underline"
    to = "/contact">Contanto </Link> o puedes hablar conmigo por linkedIn (Enlace en el pie de la página)</p>),
  Salario: (<p>Por supuesto, un aspecto importante a la hora de plantearme un cambio laboral, es el salario pero no es el único en lo que me fijo.Contactame y podremos concretar eso y otros aspectos de la oferta que puedan ser de interés(Teletrabajo, formación, beneficios sociales, etc)</p>),
  Cambio: (<p>No estoy en busqueda activa, pero nunca me cierro a nuevas metas laborales u oportunidades que puedan ser interesantes a nivel profesional o personal</p>),
  Ayuda: ( <p>Siempre es un placer intentar ayudar a un compañero.Si lo necesitas puedes escribirme por <a className = "font-medium text-blue-600 dark:text-blue-800 hover:underline"
    href = "mailto:daniel.merillas@gmail.com">correo</a></p>),
  IA: (<p>Soy una IA programada por Daniel Merillas</p>),
  Habilidades: (<p>Para ver las habilidades en programación de Dani puede acceder a la sección <Link className = "font-medium text-blue-600 dark:text-blue-800 hover:underline"
  to = "/skills">Habilidades</Link></p>),
  unkown: ( <p>Lo siento, no te entendi.Intenta preguntar otra cosa y disculpa las molestias</p>
  )
}