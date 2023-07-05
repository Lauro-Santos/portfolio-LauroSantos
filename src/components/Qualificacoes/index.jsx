import style from "./Qualificacoes.module.scss";

import logoIfrn from "assets/icons/logo-ifrn.svg";
import logoAlura from "assets/icons/logo-alura.svg";
import logoUnopar from "assets/icons/logo-unopar.svg";
import logoAnhaguera from "assets/icons/logo-anhaguera.svg";

const Qualificacoes = () => {
  return (
    <div className={style.qualificacoes}>
      <h2>Minhas qualificações</h2>
      <ul>
      <li class={style.formacao}>
          <div>
            <img src={logoUnopar} alt="Logo unopar" />
            <img src={logoAnhaguera} alt="Logo anhaguera"/>
          </div>
          <p>Cursando superior em Desenvolvimento Web na Universidade Unopar</p>
        </li>
        <li class={style.formacao}>
          <img src={logoIfrn} alt="Logo ifrn" />
          <p>
            Ensino médio-técnico no IFRN - Santa Cruz RN, curso de técnico em informática
          </p>
        </li>
        <li class={style.formacao}>
          <img src={logoAlura} alt="Logo alura" />
          <p>
            Aluno assíduo dos cursos e formações da plataforma Alura da Caelum
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Qualificacoes;
