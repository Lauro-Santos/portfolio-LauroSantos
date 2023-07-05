// import BarraSocialMidia from "../BarraSocialMidia"
import Qualificacoes from "../Qualificacoes";
import Contato from "../Contato";
import style from "./Rodape.module.scss";

const Rodape = () => {
  return (
    <footer className={style.rodape} id="#rodape">
      <Qualificacoes />
      <h3 class={style.rodape__texto}>Entre em contato</h3>

      <Contato />

      {/* <BarraSocialMidia classe={'barra-social-midia-rodape'}/> */}

      <span class={style.rodape__creditos}>
        Feito à mão por mim &#169;Lauro Santos
      </span>
    </footer>
  );
};

export default Rodape;
