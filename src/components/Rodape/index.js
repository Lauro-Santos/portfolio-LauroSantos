import BarraSocialMidia from "../BarraSocialMidia"

import Contato from "../Contato"

import "./Rodape.css"

const Rodape = () => {
    return (
        <footer class="rodape">
    <h3 class="rodape__texto">Entre em contato</h3>

    <Contato />

    <BarraSocialMidia classe={'barra-social-midia-rodape'}/>

    <span class="rodape__creditos">Feito à mão por mim &#169;Lauro Santos</span>

</footer>
    )
}

export default Rodape