const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function resetText(event) {
    //O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    //O event possui várias propriedades, porém a mais usada é o event.target,
    //que retorna o objeto que disparou o evento.
  };

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? R: Devido a propriedade transform na classe .tech


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function onClickAdicionaClasseTech(event) {
  let elementoTech = document.querySelector('.tech');
  elementoTech.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', onClickAdicionaClasseTech);
secondLi.addEventListener('click', onClickAdicionaClasseTech);
thirdLi.addEventListener('click', onClickAdicionaClasseTech);
firstLi.addEventListener('dblclick', resetText);


// let acessaLi = document.querySelector('ul');
// function onClickAdicionaClasseTech () {
//   acessaLi.addEventListener('click', function (event) {
//       for (let i = 0 ; i<acessaLi.childNodes.length ; i += 1) {
//         acessaLi.childNodes[i].className = '';
//     }
//     event.target.classList.add('tech');
//     });
// }
// onClickAdicionaClasseTech()


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteraTextoClasseTech(event) {
  let elementoTech = document.querySelector('.tech');
  elementoTech.textContent = event.target.value;
}
 input.addEventListener('change',alteraTextoClasseTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirecionaPortfolio() {
  myWebpage = window.open('https://steffanimamura.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick',redirecionaPortfolio);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mouseOverMudaCor() {
  myWebpage.style.color = 'red';
}
myWebpage.addEventListener('mouseover',mouseOverMudaCor);

// Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   O event possui várias propriedades, porém a mais usada é o event.target,
//   que retorna o objeto que disparou o evento.
// }

//firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.