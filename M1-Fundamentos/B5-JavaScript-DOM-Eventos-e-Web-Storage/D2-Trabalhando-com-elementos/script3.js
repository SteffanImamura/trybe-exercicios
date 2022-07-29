// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const adicionaH1 = document.createElement('h1');
adicionaH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(adicionaH1);

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
const adicionaMain = document.createElement('main');
adicionaMain.classList.add("main-content");
document.body.appendChild(adicionaMain);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const adicionaSectionCenter = document.createElement('section');
adicionaSectionCenter.classList.add("center-content");
document.querySelector('main').appendChild(adicionaSectionCenter);

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const adicionaP = document.createElement('p');
adicionaP.innerText = 'Lorem Ipsum';
document.querySelector('section').appendChild(adicionaP);

// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const adicionaSectionLeft = document.createElement('section');
adicionaSectionLeft.classList.add("left-content");
document.querySelector('main').appendChild(adicionaSectionLeft);

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const adicionaSectionRight = document.createElement('section');
adicionaSectionRight.classList.add("right-content");
document.querySelector('main').appendChild(adicionaSectionRight);

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const adicionaImagem = document.createElement('img');
adicionaImagem.classList.add("small-image");
adicionaImagem.setAttribute('src', 'https://picsum.photos/200');
document.querySelector('.left-content').appendChild(adicionaImagem);


// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const adicionaLista = document.createElement('ul');
document.querySelector('.right-content').appendChild(adicionaLista);

for (let i = 1; i <= 10; i += 1) {
    const adicionaItensLista = document.createElement('li');
    adicionaItensLista.innerText = [i];
    document.querySelector('ul').appendChild(adicionaItensLista);
}

// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
const adiciona1h3 = document.createElement('h3');
document.querySelector('main').appendChild(adiciona1h3);
const adiciona2h3 = document.createElement('h3');
document.querySelector('main').appendChild(adiciona2h3);
const adiciona3h3 = document.createElement('h3');
document.querySelector('main').appendChild(adiciona3h3);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1. 🚀 Adicione a classe title na tag h1 criada;
adicionaH1.classList.add("title");

// 2. 🚀 Adicione a classe description nas 3 tags h3 criadas;
adiciona1h3.classList.add("description");
adiciona2h3.classList.add("description");
adiciona3h3.classList.add("description");

// 3. 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const mainContent = document.querySelector('.main-content');
const leftContent = document.querySelector('.left-content');

mainContent.removeChild(leftContent);

// 4. 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
document.querySelector('.right-content').style.marginRight = "auto";

// 5.🚀  Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
document.querySelector('.center-content').parentElement.style.backgroundColor = "green";

// 6. 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

ul.removeChild(li[8]);
ul.removeChild(li[9]);
