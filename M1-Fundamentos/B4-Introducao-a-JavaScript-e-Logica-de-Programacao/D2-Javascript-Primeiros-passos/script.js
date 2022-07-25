let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// OK! 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(number of numbers){
    console.log(number);
}

// OK! 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

//let contador = 0;
//for(number of numbers){
//    contador += number;
//}
//console.log(contador);

//OK! 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

//let contador = 0;
//for(number of numbers){
//    contador += number;
//}
//console.log(contador/numbers.length);

// OK! 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//let contador = 0;
//for(number of numbers){
//    contador += number;
//}
//let media = contador/numbers.length
//switch(true){
//    case media>20:
//      console.log("valor maior que 20");
//        break;
//    case media<=20:
//        console.log("valor menor ou igual a 20");
//        break;
//}


// OK! 5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

//function maiorNumeroArray(array){
//let maior = array[0];
//for(i=1 ; i<array.length ; i++) {
//    if(array[i]>maior) {
//        maior =  array[i];
//    }
//}
//console.log(maior);
//}
//maiorNumeroArray(numbers)

// OK! 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//let contador = 0;
//let impares = [];
//for(i=0 ; i<numbers.length ; i++){
//    if(numbers[i]%2 != 0){
//        contador += 1;
//        impares.push(numbers[i]);
//    }
//}
//switch(true){
//   case contador>0:
//        console.log(impares);
//        console.log("Existem "+contador+" valores ímpares no array");
//        break;
//    case contador=0:
//        console.log("Nenhum valor ímpar encontrado");
//        break;
//}


// OK! 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

//function menorNumeroArray(array) {
//    let menor = array[0];
//    for (i = 1; i < array.length; i++) {
//        if (array[i] < menor) {
//            menor = array[i];
//        }
//    }
//    console.log(menor);
//}
//menorNumeroArray(numbers)

// OK! 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

//let array = [];
//for(i=0 ; i<=25 ;i++){
//    array.push(i);
//}
//console.log(array);

// OK! 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

//let array = [];
//for(i=0 ; i<=25 ;i++){
//    array.push(i/2);
//}
//console.log(array);



//Exercicio Bonus

//for (let index = 1; index < array.length; index += 1) {
//    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//      if (array[index] < array[secondIndex]) {
//        let position = array[index];
//        array[index] = array[secondIndex];
//        array[secondIndex] = position;
//     }
//    }
//  }

// Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  Ordene o array numbers em ordem crescente e imprima seus valores;

//Algoritmo Ordenação de Bolha
//function ordenaCrescenteArray(array){
//for(i=0 ; i<array.length-1 ; i++) {
//    for(j=0; j<array.length-i-1 ; j++){
//    if(array[j] > array[j+1]) {
//        let temporario = array[j];
//        array[j] = array[j + 1];
//        array[j + 1] = temporario; 
//    }
//}
//}
//console.log(array);
//}
//ordenaCrescenteArray(numbers)

//Ordene o array numbers em ordem decrescente e imprima seus valores;

//function ordenaDecrescenteArray(array){
//    for(i=0 ; i<array.length ; i++){
//        for(j=0 ; j<array.length-i-1 ; j++){
//            if(array[j]<array[j+1]){
//                let temporario = array[j];
//                array[j] = array[j + 1];
//                array[j + 1] = temporario;
//            }
//        }
//    }
//    console.log(array);
//}
//ordenaDecrescenteArray(numbers)

//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

// function multiplica2elementosVizinhos(array) {
//     let novoArray = [];
//     for (i = 0; i < array.length; i++) {
//         if (i == array.length-1) {
//             novoArray.push(array[i] * 2);
//         }
//         else {
//                 novoArray.push(array[i] * array[i + 1]);
//             }
//     }
//     console.log(novoArray);
// }
// multiplica2elementosVizinhos(numbers);
