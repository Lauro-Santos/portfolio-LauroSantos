import style from "./Projetos.module.scss";

const projetos = [
  {
    nome: "Meteora",
    descricao: `Desenvolvi o front-end de um site responsivo de e-commerce da Meteora. O site possui um buscador de produtos, carrossel com informações da coleção, galeria de categorias e detalhes dos produtos.`,
    img: require("assets/images/imagem-projeto-meteora.png"),
    linkProjeto: "https://meteora-ochre.vercel.app/",
    linkRepositorio: "https://github.com/Lauro-Santos/meteora",
    tecnologias: ["React", "JavaScript", "Sass"],
  },
  {
    nome: "AluraDev",
    descricao: `Esse projeto foi proposto pela equipe de instrutores da Alura, como um desafio 
    pra aplicar os conhecimentos em front-end, o projeto consiste no front-end de uma plataforma 
    de compartilhamento de código.`,
    img: require("assets/images/imagem-projeto-aluradev.png"),
    linkProjeto: "https://alura-dev-iota.vercel.app/",
    linkRepositorio: "https://github.com/Lauro-Santos/Vitrine-Dev---AluraDev",
    tecnologias: ["Highlight.js", "JavaScript", "HTML", "CSS"],
  },
  {
    nome: "Loja de roupas",
    descricao: `Este é um projeto front-end para uma loja de roupas fictícia que tem como objetivo 
        deste projeto é demonstrar habilidades em HTML, CSS e JavaScript para a criação de uma página 
        web interativa, responsiva, intuitiva e atraente para uma loja de roupas online.`,
    img: require("assets/images/imagem-projeto-loja-de-roupas.png"),
    linkProjeto: "https://loja-de-roupas-tau.vercel.app/",
    linkRepositorio:
      "https://github.com/Lauro-Santos/Loja-de-roupas/tree/master",
    tecnologias: ["React", "HTML", "CSS"],
  },
];

const Projetos = () => {
  return (
    <section className={style.projetos}>
      <div className={style.projetos__container}>
        {projetos.map((projeto) => (
          <div className={style.card}>
            <img src={projeto.img} alt={projeto.nome}></img>
            <div className={style.projeto__sobre}>
              <h3 className={style.titulo__projeto}>{projeto.nome}</h3>
              <p className={style.descricao__projeto}>{projeto.descricao}</p>
              <ul
                aria-label="Tecnologias Utilizadas"
                className={style.tecnologias__projeto}
              >
                {projeto.tecnologias.map((tecnologia) => (
                  <li>{tecnologia}</li>
                ))}
              </ul>
              <div className={style.botoes__projetos}>
                <a
                  href={projeto.linkProjeto}
                  className={style.ver__projeto}
                  target="_blank"
                >
                  Ver Projeto
                </a>
                <a
                  href={projeto.linkRepositorio}
                  className={style.github__do__projeto}
                  target="_blank"
                >
                  <svg viewBox="0 0 80 80" fill="none">
                    <path
                      d="M74.5119 5.2493e-05H5.51199C4.78861 -0.00311086 4.07174 0.136728 3.40261 0.411527C2.73348 0.686326 2.1253 1.09066 1.61304 1.60128C1.10078 2.1119 0.694559 2.71872 0.417734 3.38685C0.140909 4.05498 -0.00105552 4.77123 5.90823e-06 5.4944V13.1961V13.324V66.708V66.828V74.3777C5.90823e-06 75.8328 0.578203 77.2282 1.6074 78.2571C2.6366 79.286 4.03249 79.864 5.488 79.864H13.032L13.24 79.96H28.4L28.592 79.864C29.1168 79.5999 29.5453 79.1775 29.8166 78.6564C30.088 78.1354 30.1885 77.5422 30.1039 76.9609C30.0399 74.4657 30.0559 71.9704 30.0399 69.4752C30.0399 69.1953 30.0399 68.9153 30.0399 68.7234C28.256 68.7794 26.52 68.9233 24.8 68.8593C22.144 68.7554 19.608 68.1796 17.84 65.9722C17.3049 65.15 16.8264 64.2923 16.408 63.405C15.664 62.1334 14.96 60.8298 14.104 59.6381C13.564 59.041 12.9605 58.5047 12.304 58.0386C11.793 57.6601 11.314 57.2401 10.872 56.783C10.416 56.2071 10.528 55.9832 11.264 55.7593C12.4989 55.5144 13.7808 55.7337 14.864 56.3751C16.547 57.2691 17.9359 58.6298 18.864 60.2939C19.3749 61.2492 20.0949 62.0769 20.9703 62.7152C21.8457 63.3536 22.854 63.7862 23.92 63.9808C25.9081 64.3008 27.9465 64.0224 29.7759 63.1811C29.8843 63.1235 29.9794 63.044 30.0551 62.9476C30.1309 62.8512 30.1857 62.74 30.2159 62.6212C30.474 60.7532 31.3399 59.022 32.6799 57.6947C31.8799 57.5827 31.2639 57.4708 30.6239 57.3828C27.2358 56.9781 23.9907 55.7807 21.152 53.8878C18.4413 51.9904 16.4867 49.1981 15.632 46.0022C14.3581 42.1068 14.1291 37.9454 14.968 33.9338C15.4951 31.6265 16.5957 29.4892 18.168 27.7197C18.3078 27.5904 18.4032 27.4203 18.4405 27.2336C18.4779 27.0469 18.4553 26.8531 18.376 26.68C17.232 23.409 17.624 20.194 18.792 17.0109C19.024 16.3711 19.592 16.4751 20.024 16.5551C21.2267 16.7276 22.407 17.0306 23.544 17.4588C25.536 18.3385 27.424 19.4262 29.3759 20.3859C29.7488 20.5828 30.1765 20.6503 30.5919 20.5779C36.6814 19.0274 43.0625 19.0274 49.1519 20.5779C49.3966 20.6502 49.6548 20.6647 49.906 20.6203C50.1573 20.5759 50.3948 20.4738 50.5999 20.3219C52.9864 18.696 55.6205 17.4672 58.3999 16.683C58.4238 16.6796 58.448 16.6796 58.4719 16.683C60.5439 16.2112 60.8719 16.4351 61.4719 18.4585C62.3479 21.2 62.3311 24.1486 61.4239 26.88C61.3995 27.0068 61.4026 27.1374 61.4329 27.2629C61.4633 27.3885 61.5202 27.5061 61.5999 27.6077C64.8879 31.3746 65.7119 35.8053 65.2559 40.6278C65.0424 42.9833 64.504 45.2979 63.6559 47.5058C62.1919 51.2886 59.4319 53.7679 55.8399 55.4634C53.3707 56.5584 50.7434 57.2549 48.0559 57.5268C47.8559 57.5268 47.6479 57.5827 47.4479 57.6227C47.3565 57.6556 47.2703 57.7014 47.1919 57.7587C49.4479 59.95 49.7919 62.7492 49.7839 65.6683C49.7839 69.3312 49.7839 73.0021 49.7839 76.665C49.7839 77.1049 49.7839 77.5447 49.8479 77.9846C49.8141 78.4337 49.9563 78.8783 50.2445 79.2246C50.5326 79.5708 50.944 79.7915 51.3919 79.84L51.5519 79.904L51.7279 80H66.6239L67.0319 79.904H74.5119C75.2359 79.9041 75.9529 79.7608 76.6213 79.4826C77.2898 79.2044 77.8965 78.7967 78.4067 78.283C78.9168 77.7693 79.3202 77.1598 79.5936 76.4895C79.8671 75.8192 80.0051 75.1015 79.9999 74.3777V5.4944C80.0009 4.77325 79.8597 4.05897 79.5844 3.39241C79.3091 2.72585 78.905 2.1201 78.3953 1.60979C77.8856 1.09949 77.2802 0.694655 76.6139 0.41844C75.9475 0.142225 75.2332 5.17268e-05 74.5119 5.2493e-05Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
