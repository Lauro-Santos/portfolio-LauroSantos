import "./Alerta.css"

const Alerta = ({mensagem}) => {
    return (
        <div class="alerta info">
            <div class="texto texto-info">
                <i class="fa-solid fa-circle-info"></i>
                <p><strong>Opa!</strong> {mensagem}</p>
            </div>
        </div>
    )
}

export default Alerta