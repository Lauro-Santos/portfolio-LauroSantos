import "./Qualificacoes.css"

import logoIfrn from '../../img/logo-ifrn.svg';
import logoAlura from '../../img/logo-alura.svg';
import logoUnopar from '../../img/logo-unopar.png';

const Qualificacoes = () => {
    return (
        <div className="qualificacoes">
            <h2>Minhas qualificações</h2>
            <ul>
                <li class="formacao">
                    <img src={logoIfrn} alt="Logo ifrn"></img>
                    <p>Ensino médio-técnico no IFRN - SC, curso de técnico em informática</p>
                </li>
                <li class="formacao">
                    <img src={logoAlura} alt="Logo alura"></img>
                    <p>Aluno assíduo dos cursos e formações da plataforma Alura da Caelum</p>
                </li>
                <li class="formacao">
                    <img src={logoUnopar} alt="Logo unopar"></img>
                    <p>Cursando superior em Desenvolvimento Web na Universidade Unopar</p>
                </li>
            </ul>
        </div>
    )
}

export default Qualificacoes