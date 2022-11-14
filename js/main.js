
//---------------------------------------------------------------------------------------------

const botao = document.querySelector('.botaoCopiar');
const email = document.querySelector('.email');

botao.addEventListener('click', copiarEmail);

function copiarEmail() {
    
    navigator.clipboard.writeText(email.innerText);
}
