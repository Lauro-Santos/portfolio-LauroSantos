
//alterador de skills (ainda tem que melhorar)
const progressoSkill_html = document.querySelector('.htlm');
const progressoSkill_css = document.querySelector('.css');
const progressoSkill_javaScript = document.querySelector('.javaScript');
const progressoSkill_react = document.querySelector('.react');
const progressoSkill_ui = document.querySelector('.ui');
const progressoSkill_graphicDesign = document.querySelector('.graphicDesign');

let html = "75%";
let css = "60%";
let js = "40%";
let react = "15%";
let ui = "60%";
let gd = "95%";

progressoSkill_html.setAttribute("style", "width: "+html+";");
progressoSkill_html.setAttribute("per", html);

progressoSkill_css.setAttribute("style", "width: "+css+";");
progressoSkill_css.setAttribute("per", css);

progressoSkill_javaScript.setAttribute("style", "width: "+js+";");
progressoSkill_javaScript.setAttribute("per", js);

progressoSkill_react.setAttribute("style", "width: "+react+";");
progressoSkill_react.setAttribute("per", react);

progressoSkill_ui.setAttribute("style", "width: "+ui+";");
progressoSkill_ui.setAttribute("per", ui);

progressoSkill_graphicDesign.setAttribute("style", "width: "+gd+";");
progressoSkill_graphicDesign.setAttribute("per", gd);

//---------------------------------------------------------------------------------------------

const cabecalho = document.getElementById("cabecalho");
const cabecalhoTop = cabecalho.offsetTop;//obter distancia entre o elemento e o topo da pagina

function fixarCabecalhoTopo() {
    if (window.pageYOffset > cabecalhoTop) {
        cabecalho.classList.add("cabecalho--fixed");
        console.log(cabecalho + "verificado");
    } else {
        cabecalho.classList.remove("cabecalho--fixed");
    }
}

window.onscroll = function() {
    fixarCabecalhoTopo();
}

const botao = document.querySelector('.botaoCopiar');
const email = document.querySelector('.email');

botao.addEventListener('click', copiarEmail);

function copiarEmail() {
    
    navigator.clipboard.writeText(email.innerText);
}
