import { useState } from "react"
import "./Contato.css"
import emailjs from "@emailjs/browser"
import Alerta from "../Alerta"

const Contato = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === '') {
            setAlert("Preencha o nome")
            return false
        }
        if (email === '') {
            setAlert("Preencha o email")
            return false
        }
        if (message === '') {
            setAlert("Preencha a mensagem")
            return false
        }

        const templateParms = {
            from_name: name,
            email: email,
            message: message,
        }

        emailjs.send("service_pk0k9tu", "template_wea0rl5", templateParms, "OkbtxMWvZs8lwgecV")
            .then((response) => {
                console.log("EMAIL ENVIADO: ", response.status, "|", response.text)
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log("ERRO: ", error)
            })
    }

    return (
        <div className="container__contato">
            <form className="form" onSubmit={sendEmail} >
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input className="button" type="submit" value="Enviar" />

                {alert !== "" && <Alerta mensagem={alert} />}
            </form>

        </div>
    );

}

export default Contato