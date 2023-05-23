import "./Habilidades.css"

const listaHabilidades = [
    {
        nome: "JavaScript",
        icone: "fa-brands fa-js",
        cor: "#F7DF1E"
    },
    {
        nome: "React",
        icone: "fa-brands fa-react",
        cor: "#00D1FF"
    },
    {
        nome: "HTML",
        icone: "fa-brands fa-html5",
        cor: "#E54F27"
    },
    {
        nome: "CSS",
        icone: "fa-brands fa-css3-alt",
        cor: "#0057FF"
    },
]

const Hbilidades = () => {
    return (
        <section className="habilidades">
            <h2 className="habilidades__titulo">Minhas habilidades</h2>
            <ul className="habilidades__container">
                {listaHabilidades.map((habilidade) => {
                    return (
                        <li key={habilidade.nome} style={{ "--cor-icone": habilidade.cor}} className="habilidade">
                            <i className={habilidade.icone} style={{ "--cor-icone": habilidade.cor}}></i>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default Hbilidades