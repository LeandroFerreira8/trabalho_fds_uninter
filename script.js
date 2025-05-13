let botao = document.querySelector("#botao");
let mensagem = document.querySelector(".mensagem");

function mostrar(){
    mensagem.innerHTML = "Bem-vindo";
}

botao.addEventListener("click", mostrar);