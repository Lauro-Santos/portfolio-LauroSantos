import BarraSocialMidia from "../BarraSocialMidia"
import TextoCabecalho from "../TextoCabecalho"
import "./Cabecalho.css"

const Cabecalho = ({img}) => {
    return (
        <header className="cabecalho">
            <BarraSocialMidia classe={'barra-social-midia'}/>
            <TextoCabecalho />
            <img src={img} alt="Minha logo"></img>
        </header>
    )
}

export default Cabecalho