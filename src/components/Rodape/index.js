import BarraSocialMidia from "../BarraSocialMidia"

import "./Rodape.css"

const Rodape = () => {
    return (
        <footer class="rodape">
    <p class="rodape__texto">Entre em contato</p>

    <BarraSocialMidia classe={'barra-social-midia-rodape'}/>

    <span class="rodape__creditos">Feito à mão por mim &#169;Lauro Santos</span>

</footer>
    )
}

export default Rodape