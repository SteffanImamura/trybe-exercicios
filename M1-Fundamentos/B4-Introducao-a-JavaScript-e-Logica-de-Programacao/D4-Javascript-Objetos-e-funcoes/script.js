// Parte I - Objetos e For / In
// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// OK! 1 - Imprima no console uma mensagem de boas - vindas para a personagem acima, incluindo seu nome.Valor esperado no console:
// Bem - vinda, Margarida

//console.log("Bem vinda, "+info.personagem);


// OK! 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.Valor esperado no console:

// {
//     personagem: 'Margarida',
//         origem: 'Pato Donald',
//             nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//                 recorrente: 'Sim'
// }

// info.recorrente = "Sim";
// console.table(info);


// OK! 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
//   personagem
// origem
// nota
// recorrente

// for(key in info){
//     console.table(key);
// }



// OK! 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for(key in info){
//     console.log(info[key]);
// }



// NOK! 5 - Agora, defina um segundo objeto com a mesma estrutura(as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
// };

// let info3 = Object.assign({}, info," ", info2);
// console.log(info3);







// Usando o objeto abaixo, faça os exercícios a seguir:
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//     ],
// };

// OK! 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

//console.log("O livro favorito de "+leitor.nome+" "+leitor.sobrenome+" se chama "+leitor.livrosFavoritos[0].titulo); 


// OK! 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array.Atribua a esta chave um objeto contendo as seguintes informações:

// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//             editora: 'Rocco',
//   }

// leitor.livrosFavoritos[1] = {
//     titulo: "Harry Potter e o Prisioneiro de Azkaban",
//     autor: "JK Rowling",
//     editora: "Rocco",
// }
//console.log(leitor.livrosFavoritos);


// OK! 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

//console.log(leitor.nome+" tem "+leitor.livrosFavoritos.length+" livros favoritos")



// Parte II - Funções
// Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.
// A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação.A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa.Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
//     Spoiler - alert: para os exercícios do dia, os métodos split, join e reverse podem ser muito úteis.


// OK! 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
//         verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

// function verificaPalindromo(string){
//     let palindromo = "";
//     for(i=string.length-1 ; i>=0 ; i--){
//         palindromo += string[i];
//     }
//     if(palindromo == string){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
// verificaPalindromo("banana")



// OK! 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

// let teste = [2, 3, 6, 7, 10, 1];

// function indiceMaiorElementoArray(array){
//     let indiceMaior = 0;
//     let maior = array[0];
//     for(i=1 ; i<array.length ; i++){
//         if(array[i]>maior){
//             indiceMaior = array[i];
//         }
//     }
//     console.log(array.indexOf(indiceMaior));
// }
// indiceMaiorElementoArray(teste)


// OK! 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

// let teste2 = [2, 4, 6, 7, 10, 0, -3];

// function indiceMenorElementoArray(array){
//     let indiceMenor = 0;
//     let menor = array[0];
//     for(i=1 ; i<array.length ; i++){
//         if(array[i]<menor){
//             indiceMenor = array[i];
//         }
//     }
//     console.log(array.indexOf(indiceMenor));
// }
// indiceMenorElementoArray(teste2)

// OK! 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// let teste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorElemento(array){
//     let maior = "";
//     for(i=0 ; i<array.length ; i++){
//         if(array[i].length > maior.length){
//             maior = array[i];
//         }
//     }
//     console.log(maior);
// }
// maiorElemento(teste3)


// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let teste4 = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(array){
    array.sort();
    let atual = "";
    let repete = 0;

    for (i=0 ; i<array.length ; i++){
        if(array[i] != atual){
            if(repete>0){
                console.log();
            }
        }
    }
}
maisRepete(teste4)

// 6 - Crie uma função que receba um número natural(número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.




// Valor esperado no retorno da função: 1 + 2 + 3 + 4 + 5 = 15.
// 7 - Crie uma função que receba uma string word e outra string ending.Verifique se a string ending é o final da string word.Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false






// Bônus
// Os exercícios a seguir são mais desafiadores do que os anteriores, e te permitem utilizar vários conceitos adquiridos até o momento no curso para construir um código melhor estruturado como solução.Aproveite para treinar suas habilidades e testar coisas novas!

// 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
//     Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:


// | I | 1 |
// | --- | ---- |
// | IV | 4 |
// | V | 5 |
// | IX | 9 |
// | X | 10 |
// | XL | 40 |
// | L | 50 |
// | XC | 90 |
// | C | 100 |
// | CD | 400 |
// | D | 500 |
// | CM | 900 |
// | M | 1000 |

//     Que tal criar um objeto que associe cada letra a um numeral para fácil consulta ?
//         Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído.Exemplo: IX = 10 - 1 = 9.





// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];






// 🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.Por exemplo, o array['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...


// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
// ];

//   Usando o objeto abaixo, faça os exercícios a seguir:

// let moradores = {
//     blocoUm: [
//         {
//             nome: 'Luiza',
//             sobrenome: 'Guimarães',
//             andar: 10,
//             apartamento: 1005,
//         },
//         {
//             nome: 'William',
//             sobrenome: 'Albuquerque',
//             andar: 5,
//             apartamento: 502,
//         },
//     ],
//     blocoDois: [
//         {
//             nome: 'Murilo',
//             sobrenome: 'Ferraz',
//             andar: 8,
//             apartamento: 804,
//         },
//         {
//             nome: 'Zoey',
//             sobrenome: 'Brooks',
//             andar: 1,
//             apartamento: 101,
//         },
//     ],
// };





// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".





// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.

