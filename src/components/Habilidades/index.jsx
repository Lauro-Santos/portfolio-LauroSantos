import style from "./Habilidades.module.scss"

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
    {
        nome: "Sass",
        icone: "fa-brands fa-sass",
        cor: "#c69"
    },
]

const Hbilidades = () => {
    return (
        <section className={style.habilidades}>
            <h2 className={style.habilidades__titulo}>Minhas habilidades</h2>
            <ul className={style.habilidades__container}>
                {listaHabilidades.map((habilidade) => {
                    return (
                        <li key={habilidade.nome} className={style.habilidade}>
                            <i className={habilidade.icone}></i>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default Hbilidades;