
// OK! 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// let resultado;
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// function adicao(a,b){
//     resultado = a + b;
//     console.log(resultado)
// }
// adicao(89,54)

// function subtracao(a,b){
//     resultado = a - b;
//     console.log(resultado)
// }
// subtracao(123,98)

// function multiplicacao(a,b){
//     resultado = a * b;
//     console.log(resultado)
// }
// multiplicacao(4,9)

// function divisao(a,b){
//     resultado = a / b;
//     console.log(resultado)
// }
// divisao(8,2)

// function modulo(a,b){
//     resultado = a % b;
//     console.log(resultado)
// }
// modulo(3,2)



// OK! 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// function maiorDeDois(a,b){
//     if(a>b){
//         console.log(`O maior é o ${a}`);
//     } else if(a < b){
//         console.log(`O maior é o ${b}`);
//     } else{
//         console.log("a e b são iguais");   
//     }
// }
// maiorDeDois(26,109)



// OK! 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// function maiorDeTres(a, b, c) {
//     if (a > b) {
//         if (a > c) {
//             console.log(`${a} é o maior número`)
//         } else {
//             console.log(`${c} é o maior número`)
//         }
//     } else if (b > c) {
//         console.log(`${b} é o maior número`)
//     }
// }
// maiorDeTres(43,89,13)



// OK 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário

// function pnz(input){
//     if(input>0){
//         console.log("positive");
//     } else if(input<0){
//         console.log("negative")
//     } else {
//         console.log("zero"); 
//     }
// }
// pnz(267)



// OK! 5. 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// function angulosInternos(a,b,c){
//     let soma = a + b + c;
//     if(a<0 || b<0 || c<0){
//         console.log("Ângulo inválido");
//     } else if(soma==180){
//         console.log("true");
//     }else if(soma!=180){
//         console.log("false")
//     }
// }
// angulosInternos(30,50,90)



// OK! 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// function movimentosXadrez(peca) {
//     switch(peca.toLowerCase()){
//         case 'bispo':
//             console.log("movimento em diagonais");
//             break;
//         case 'cavalo':
//             console.log("movimento em L");
//             break;
//         case 'torre':
//             console.log("movimento reto");
//             break;
//         default:
//             console.log("peça não existente");
//             break;
//     }
// }
// movimentosXadrez('Bispo')



// OK! 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// function conversaoNota(nota){
//     switch(true){
//         case nota>=90:
//             console.log("A");
//             break;
//         case nota>=80:
//             console.log("B");
//             break;
//         case nota>=70:
//             console.log("C");
//             break;
//         case nota>=60:
//             console.log("D");
//             break;
//         case nota>=50:
//             console.log("E");
//             break;
//         case nota<50:
//             console.log("F");
//             break;
//         case nota<0 || nota>100:
//             console.log("Inserir uma nota válida");
//             break;
//         default:
//             console.log("Erro");
//     }
// }
// conversaoNota(asd)



// OK! 8. 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

// function seAlgumaPar(a,b,c){
//     if(a%2==0 || b%2==0 || c%2==0){
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// seAlgumaPar(3,6,11)



// OK! 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

// function seAlgumaImpar(a,b,c){
//     if(a%2!=0 || b%2!=0 || c%2!=0){
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }
// seAlgumaImpar(2,6,10)


// OK! 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.A partir dos valores, calcule quanto de lucro(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20 %.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20 % também faz parte do valor de custo.
//     valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal(lucro de um produto)

// function lucroMilProdutos(custo,valorVenda){
//     let lucro = valorVenda - (custo + (0.2*custo));
//     if(custo<0 || valorVenda<0){
//         console.log("Erro");
//     } else {
//         console.log("O lucro ao vender mil produtos será "+(1000*lucro));
//     }
// }
// lucroMilProdutos(100, 180)


// NOK! 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// 
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// 
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

function salarioLiquido(salarioBruto) {
    //INSS
    let parcelaINSS = 0;
    switch (true) {
        case salarioBruto < 1556.94:
            parcelaINSS = 0.08 * salarioBruto;
            break;
        case salarioBruto > 1556.95 && salarioBruto < 2594.92:
            parcelaINSS = 0.09 * salarioBruto;
            break;
        case salarioBruto > 2594.93 && salarioBruto < 5189.82:
            parcelaINSS = 0.11 * salarioBruto;
            break;
        case  salarioBruto > 5189.83:
            parcelaINSS = 570.88;
            break;
    }
    let INSSdeduzido = salarioBruto - parcelaINSS;
    console.log(INSSdeduzido);
    //IR
    let parcelaIR = 0;
    switch (true) {
        case INSSdeduzido < 1903.98:
            parcelaIR = 0;
            break;
        case INSSdeduzido > 1903.99 && INSSdeduzido < 2826.65:
            parcelaIR = 0.075 * INSSdeduzido - 142.80;
            break;
        case INSSdeduzido > 2826.66 && INSSdeduzido < 3751.05:
            parcelaIR = 0.15 * INSSdeduzido - 354.80;
            break;
        case INSSdeduzido > 3751.06 && INSSdeduzido < 4664.68:
            parcelaIR = 0.225 * INSSdeduzido - 636.13;
            break;
        case INSSdeduzido >= 4664.68:
            parcelaIR = 0.275 * INSSdeduzido - 869.36;
            break;
    }
    let resultado = INSSdeduzido - parcelaIR;
    console.log(`O salário líquido será ${resultado}`);
}
salarioLiquido(3000)

