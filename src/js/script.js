/* let btn = document.querySelector(".botao")

let img = document.querySelector(".botao")

btn.addEventListener("click", function(){
    if(img.classList.contains("selecionado")) {
        img.classList.remove("selecionado")
    }else {
        img.classList.add("selecionado")
    }

})
 */

/* 
   Objetivo: Quanndo clicarmos no botão temos que mostrar a imagem de fundo correspondente    
*/


/* 
const botao1 = document.getElementById('botao1')
botao1.addEventListener('click', function(){

})
 */


/* botoesCarrosel.addEventListener("click", function(){


}) */
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrosel.forEach((botao, indice) => { // puxando todos os botoes 'indice' = valor do botao
    botao.addEventListener('click', function() { //add funcioando pros botoes
        desativarBotaoSelecionado(); //remover a classe
       
        selecionarBotaoCarrosel(botao); //adicionar a classe

        esconderImagemAtiva(); //remover a classe

        mostrarImagemDeFundo(indice); //adicionar classe
    })

} )

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa'); //econtrar a classe
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado'); //criar contante da classe
    botaoSelecionado.classList.remove('selecionado');
}
