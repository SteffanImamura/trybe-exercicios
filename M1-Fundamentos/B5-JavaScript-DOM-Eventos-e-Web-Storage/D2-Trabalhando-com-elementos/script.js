// 1. Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta"));

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById("elementoOndeVoceEsta").parentElement.style.backgroundColor="green";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText="Lorem Ipsum";

// 4. Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById("pai").firstElementChild);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// 8. Agora acesse o terceiroFilho a partir de pai.
console.log(document.getElementById("pai").childNodes["#terceiroFilho"]);

