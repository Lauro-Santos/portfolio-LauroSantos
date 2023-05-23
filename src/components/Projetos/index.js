import "./Projetos.css";

const projetos = [
    {
        nome: "AluraDev",
        descricao: `Esse projeto foi proposto pela equipe de instrutores da Alura, como um desafio 
    pra aplicar os conhecimentos em front-end, o projeto consiste no front-end de uma plataforma 
    de compartilhamento de código.`,
        img: "https://raw.githubusercontent.com/Lauro-Santos/Vitrine-Dev---AluraDev/master/assets/img/Captura%20de%20tela%201.jpg",
        linkProjeto: "https://alura-dev-iota.vercel.app/",
        linkRepositorio: "https://github.com/Lauro-Santos/Vitrine-Dev---AluraDev",
        tecnologias: ["Highlight.js", "JavaScript", "HTML", "CSS"]
    },
    {
        nome: "OptimusTech",
        descricao: `Para concluir esse desafio, foram utilizados conceitos básicos como div, section, 
    flex-box, medidas responsivas em CSS, Grid e muitos outros, coisas que qualquer pessoa entrando 
    na área de Front-end precisa conhecer. Foi usado apenas HTML e CSS para criação do projeto 
    palicando o conhecimento adiquirido durante o curso de HTML e CSS da Alura.`,
        img: "https://raw.githubusercontent.com/Lauro-Santos/OptimusTech/master/assets/img/video%20of%20project.gif",
        linkProjeto: "https://lauro-santos.github.io/Vitrine-Dev---OptimusTech/",
        linkRepositorio: "https://github.com/Lauro-Santos/Vitrine-Dev---OptimusTech",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "loja de roupas",
        descricao: `Este é um projeto front-end para uma loja de roupas fictícia que tem como objetivo 
        deste projeto é demonstrar habilidades em HTML, CSS e JavaScript para a criação de uma página 
        web interativa, responsiva, intuitiva e atraente para uma loja de roupas online.`,
        img: "https://raw.githubusercontent.com/Lauro-Santos/Loja-de-roupas/master/assets/images/print.png?token=GHSAT0AAAAAACCVIDLTBBLDEIMHOBQQEHZIZDMIHEQ",
        linkProjeto: "https://loja-de-roupas-tau.vercel.app/",
        linkRepositorio: "https://github.com/Lauro-Santos/Loja-de-roupas/tree/master",
        tecnologias: ["React", "HTML", "CSS"]
    },
];

const Projetos = () => {
    return (
        <section className="projetos">
            <h2 className="projetos-titulo">Projetos</h2>
            <div className="projetos-container">
                {projetos.map((projeto) => (
                    <div className="card">
                        <img src={projeto.img} alt={projeto.nome}></img>
                        <div className="projeto__sobre">
                            <h3 className="titulo__projeto">{projeto.nome}</h3>
                            <p className="descricao__projeto">{projeto.descricao}</p>
                            <ul aria-label="Tecnologias Utilizadas" className="tecnologias__projeto">
                                {projeto.tecnologias.map((tecnologia) => (
                                    <li>{tecnologia}</li>
                                ))}
                            </ul>
                            <div className="botoes__projetos">
                                <a href={projeto.linkProjeto} className="ver__projeto" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                                <a href={projeto.linkRepositorio} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projetos;