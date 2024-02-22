

let imagem = document.getElementById("troca-imagem")


/* funcçõa:
if = se
else = se não
1 x = ATRIBUINDO VALOR, ESTOU COLOCANDO O VALOR DENTRO DA VARIAVEL.
2 X == ESTOU COMPARANDO DOIS VALORES

SUAVIDADE NA MUDANÇA DAS IMG ESTA NO CSS
  transition: opacity 1s ease-in-out; /*suavidade na mudança das imagens/*
*/


function trocaImagem(){

    if(imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    }
    else {
        imagem.style.opacity = 0
    }

}

    setInterval(function () {
        trocaImagem()

    }, 3000);