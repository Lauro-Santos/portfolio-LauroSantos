
//alterador de skills (ainda tem que melhorar)
const progressoSkill_html = document.querySelector('#skil_htlm');
const progressoSkill_css = document.querySelector('#skil_css');
const progressoSkill_javaScript = document.querySelector('#skil_javaScript');
const progressoSkill_react = document.querySelector('#skil_react');
const progressoSkill_ui = document.querySelector('#skil_ui');

progressoSkill_html.setAttribute("style", "width: 75%;");
progressoSkill_css.setAttribute("style", "width: 60%;");
progressoSkill_javaScript.setAttribute("style", "width: 50%;");
progressoSkill_react.setAttribute("style", "width: 8%;");
progressoSkill_ui.setAttribute("style", "width: 80%;");


//nao esta funcionando
const cabecalho = document.getElementsByName("nav")[0];
const cabecalhoTop = cabecalho.offsetTop();


function fixarCabecalhoTopo() {
    if (window.pageYOffset >= cabecalhoTop) {
        cabecalho.classList.add("cabecalho--fixed");
    } else {
        cabecalho.classList.remove("cabecalho--fixed");
    }
}
