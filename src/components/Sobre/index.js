import "./Sobre.css"
import foto from '../../img/lauro.jpg';

const Sobre = () => {
    return (
        <section className="sobre">
            <img src={foto}></img>
            <article>
                <p>Sou brasileiro e sempre fui criativo e busco sempre melhorar minhas criações visuais,
                    todos os meus projetos tem mais de uma versão até chegar no resultado esperado.</p>
                <p>Unindo talento e paixão por artes visuais com desenvolvimento front-end, crio uma
                    experiência atrativa e intuitiva para o usuário.</p>
            </article>
        </section>
    )
}

export default Sobre