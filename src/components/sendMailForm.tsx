/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import '../App.css'
import emailjs from '@emailjs/browser';


export function SendMailForm(props:{ serviceID:string, templateID:string, publicKey:string}) {

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [activeButton, setActiveButton] = useState<boolean>(false);

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        setActiveButton(true);

        const templateParams = {
            from_name: name,
            message: `Mensaje: ${message} \n email: ${email}`,
        };

        //emailjs.send('service_1cmdc5d', 'template_ntb03zd', templateParams, 'gEhQsotHiW-5XksGy')
        emailjs.send(props.serviceID, props.templateID, templateParams, props.publicKey)
            .then((result:any) => {
                alert(`Correo enviado correctamente`);
                setActiveButton(false);
                setEmail("");
                setName("");
                setMessage("");
                console.log(result.text);
            }, (error: { text: any; }) => {
                alert(`Error: ${error.text}`);
            });
    };


    return (
        <form onSubmit={sendEmail} >
            <Box
                sx={{
                    py: 2,
                    padding: 4,
                    display: 'grid',
                    gap: 2,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    bgcolor: 'background.paper',
                }}
            >
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    className="correo"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Escribe tu correo electrónico aquí"
                    required
                />

                <TextField
                    id="name"
                    label="Nombre"
                    type="text"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="Escribe tu correo electrónico aquí"
                    required
                />

                <TextField
                    className="mensaje"
                    placeholder="Escribe tu mensaje aquí"
                    multiline
                    required
                    label="Mensaje"
                    value={message}
                    onChange={handleChangeMessage}
                />
                <Button type="submit" variant="contained" disabled={activeButton}>enviar</Button>
            </Box>

        </form>
    )
}