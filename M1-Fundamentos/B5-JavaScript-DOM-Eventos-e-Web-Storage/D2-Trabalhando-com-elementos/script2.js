// OK! 1. Crie um irmão para elementoOndeVoceEsta.
const adicionaSectionIrmao = document.createElement('section');
const classePai = document.querySelector('#pai');
classePai.appendChild(adicionaSectionIrmao);


// OK! 2. Crie um filho para elementoOndeVoceEsta.
const adicionaFilho = document.createElement('section');
const ondeEstou = document.querySelector('#elementoOndeVoceEsta');
ondeEstou.appendChild(adicionaFilho);

// OK! 3. Crie um filho para primeiroFilhoDoFilho.
const primeiroFdoF = document.querySelector('#primeiroFilhoDoFilho');
primeiroFdoF.appendChild(adicionaFilho);


// OK! 4. A partir desse filho criado, acesse terceiroFilho.
const filhoDoFdoF = document.querySelector('#primeiroFilhoDoFilho').childNodes[0];
console.log(filhoDoFdoF.parentElement.parentElement.nextElementSibling);

// NOK! 5. Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const pai = document.querySelector('#pai');

for (let i = 0 ; i < pai.length ; i += 1) {
    let element = pai[i];
    if (element.querySelector('#elementoOndeVoceEsta')) {
        element = element;
    } else {
        pai.removeChild(element);
    }
}