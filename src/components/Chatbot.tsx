import React, { useEffect, useRef, useState } from "react";
import { EXAMPLES, ANSWERS, IA_ENDPOINT,AUTH_IA } from "../Data/ChatData";


type Message = {
  id:string;
  type:string;
  text:React.ReactNode;

}

export default function Chatbot() {

  const [prompttext, setprompttext] = useState("");
  const [loading, setloading] = useState(false);
  const [messages, setmessages] = useState<Message[]>([{ id: String(Date.now()), type: "bot", text: 'Hola, soy el chatbot de Dani. ¿En que puedo ayudarte?' }]);
  const container = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(container.current){
      container.current.scrollTo(0, container.current.scrollHeight);
    }
  }, [messages])



  function handlerSumbmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading || prompttext ==='') return;

    setloading(true)

    setmessages((messages: any) => {
      return [...messages, { id: String(Date.now()), type: "user", text: prompttext }]
    })

    fetch(IA_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: AUTH_IA,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(
        {
          model: "large",
          inputs: [prompttext],
          examples: EXAMPLES

        }),


    }).then(async (res) => {
      const r = await res.json()

      setmessages((messages: any) => {
        return [...messages, { id: String(Date.now()), type: "bot", text: ANSWERS[r.classifications[0].prediction as keyof typeof ANSWERS]  || ANSWERS['unkown'] }]
      })
      setloading(false)
      setprompttext("")
  })

  

}


return (
  <main>
    <h1 className="title-font sm:text-4xl text-3xl mt-4 text-white text-center mb-4">Pregunta a mi chatbot</h1>
    <div className="flex flex-col gap-4 m-auto max-w-lg border border-gray-400 p-4 rounded-md">
      <div className="flex flex-col grap-4 h-[350px] overflow-y-auto" ref={container}>
      {messages.map((m:any)=>(
        <div key={m.id} className={`p-4 m-2 w[80%] text-white rounded-3xl ${
          m.type === 'bot' 
          ?'bg-slate-500 text-left self-start rounded-bl-none' 
          : 'bg-blue-500 text-right self-end rounded-br-none'}`}>
          
          {m.text}
        </div>

      ))}
      </div>
      <form className="flex items-center justify-center" onSubmit={handlerSumbmit}>
        <input type="text" className="rounded rounded-r-none flex-1 py-2 px-4 border border-gray-400" placeholder="Pregunta" value={prompttext} onChange={(event)=>setprompttext(event.target.value)}/>
        <button className="px-4 py-2 bg-blue-500 rounded-lg rounded-l-none" type="submit">Enviar</button>


      </form>
    </div>
  </main>
);
}




//   return (
//     <section id="about">
//       <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//             Pregunta a mi Chatbot
//           </h1>
//           <p className="mb-8 leading-relaxed">
// {}
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }