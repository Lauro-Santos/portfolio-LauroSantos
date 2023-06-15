import { useEffect, useState } from "react"
import "./Contato.css"
import emailjs from "@emailjs/browser"
import Alerta from "../Alerta"
import Loading from "../Loading"

const Contato = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
          // Trava a rolagem da página
          document.body.style.overflow = "hidden";
    
          // Desabilita a navegação por tabulação em todos os elementos focáveis
          const focusableElements = document.querySelectorAll(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
          );
          focusableElements.forEach((element) => {
            element.setAttribute("tabIndex", "-1");
          });
        } else {
          // Restaura a rolagem da página
          document.body.style.overflow = "auto";
    
          // Habilita a navegação por tabulação em todos os elementos focáveis
          const focusableElements = document.querySelectorAll(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
          );
          focusableElements.forEach((element) => {
            element.removeAttribute("tabIndex");
          });
        }
      }, [isLoading]);

    function sendEmail(e) {
        e.preventDefault();

        if (name === '') {
            setAlert("Preencha o nome")
            return
        }
        if (email === '') {
            setAlert("Preencha o email")
            return
        }
        if (message === '') {
            setAlert("Preencha a mensagem")
            return
        }

        const templateParms = {
            from_name: name,
            email: email,
            message: message,
        }

        setAlert('')
        setIsLoading(true)

        emailjs.send("service_pk0k9tu", "template_wea0rl5", templateParms, "OkbtxMWvZs8lwgecV")
            .then((response) => {
                setName('')
                setEmail('')
                setMessage('')
                setIsLoading(false);
            }, (error) => {
                console.log("ERRO: ", error)
            })
    }

    return (
        <div className="container__contato">
            {isLoading && <Loading />}
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

                {alert && <Alerta mensagem={alert} />}
            </form>

        </div>
    );

}

export default Contato