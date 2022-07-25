// Aprofunde seus conhecimentos

// Leia atentamente os enunciados e faça o que se pede!
// Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger, acesse nosso conteúdo sobre isso.

// OK! 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// function fatorial(numero){
//     let conta = 1;
//     for(i=2 ; i<=numero ; i++){
//         conta *= i;
//     }
//     console.log(conta);
// }
// fatorial(10)

// OK! 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';

// function invertePalavra(palavra){
//     let invertida = "";
//     for(i=palavra.length-1 ; i>=0 ; i--){
//         invertida += palavra[i];
//     }
//     console.log(invertida);
// }
// invertePalavra("Trybe");

// OK! 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// function maiorElemento(vetor){
//     let maior = "";
//     for(i=0 ; i<vetor.length ; i++){
//         if(vetor[i].length > maior.length){
//             maior = vetor[i];
//         }
//     }
//     console.log(maior);
// }
// maiorElemento(array)

// function menorElemento(vetor) {
//     let menor = vetor[0];
//     for(i = 1 ; i < vetor.length ; i++) {
//         if(vetor[i].length < menor.length) {
//             menor = vetor[i];
//         }
//     }
//     console.log(menor);
// }
// menorElemento(array)

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

function maiorPrimo2a50(){
    let maiorPrimo = 0;
    for(i=2 ; i<=50 ; i++){
        if(i%){  //dividir e dps verificar a qtd de divisores
            if(i > i-1){
            maiorPrimo = i;
            }
        }
    }
    console.log(maiorPrimo);
}
maiorPrimo2a50()

// Bônus
// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****




// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****




// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.



// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****




// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7
//    *
//   * *
//  *   *
// *******




// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.




