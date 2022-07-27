/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie e execute uma função que mude a cor do quadrado vermelho para branco.
Crie e execute uma função que corrija o texto da tag <h1>.
Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

document.getElementsByTagName("p")[1].innerText="Daqui 2 anos estarei muito feliz e motivado seguindo a carreira de Dev";
document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "rgb(255,255,255)";
document.getElementsByTagName("h1")[0].innerText="Exercício 5.1 - JavaScript";
function tagPmaiusculo(){
    for(let i = 0 ; i < document.getElementsByTagName("p").length ; i += 1){
        document.getElementsByTagName("p")[i].style.textTransform = "uppercase";
    }
}
tagPmaiusculo()

function exibeTagP(){
    for(let i = 0 ; i < document.getElementsByTagName("p").length ; i += 1) {
        console.log(document.getElementsByTagName("p")[i]);
    }
}
exibeTagP()

