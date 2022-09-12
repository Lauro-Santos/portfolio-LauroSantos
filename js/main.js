
//alterador de skills (ainda tem que melhorar)
const progressoSkill_html = document.querySelector('#skil_htlm');
const progressoSkill_css = document.querySelector('#skil_css');
const progressoSkill_javaScript = document.querySelector('#skil_javaScript');
const progressoSkill_react = document.querySelector('#skil_react');
const progressoSkill_ui = document.querySelector('#skil_ui');
const progressoSkill_graphicDesign = document.querySelector('#skil_graphicDesign');

progressoSkill_html.setAttribute("style", "width: 75%;");
progressoSkill_css.setAttribute("style", "width: 60%;");
progressoSkill_javaScript.setAttribute("style", "width: 50%;");
progressoSkill_react.setAttribute("style", "width: 8%;");
progressoSkill_ui.setAttribute("style", "width: 80%;");
progressoSkill_graphicDesign.setAttribute("style", "width: 95%;");

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
