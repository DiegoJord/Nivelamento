let alturamasc = [];
let alturafem = [];
let masc = [];
let fem = [];

for (let i = 0; i < 6; i++){
    let genero = prompt("Digite o seu sexo. M para masculino e F para feminino: ")

    if (genero == "M") {
        let altura = parseFloat(prompt("Digite sua altura: "))
        masc.push(genero)
        alturamasc.push(altura)
    } else if (genero == "F"){
        let altura = parseFloat(prompt("Digite sua altura: "))
        fem.push(genero)
        alturafem.push(altura)
    } else {
        console.log("Informe se o gênero é M ou F: ")
    }
}

let maiorAltura = 0;
for (i of alturafem){
    if (i > maiorAltura){
        maiorAltura = i
    }
}
for (i of alturamasc) {
    if (i > maiorAltura){
        maiorAltura = i
    }
}

let menorAltura = 0;
for (i of alturafem) {
    if (menorAltura == 0){
        menorAltura = i
    }else if (i > maiorAltura){
        maiorAltura = i
    }
}
for (i of alturamasc) {
    if (menorAltura == 0){
        menorAltura = i
    } else if (i > maiorAltura){
        maiorAltura = i
    }
}

let soma = alturamasc.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);

let media = soma / alturamasc.length

console.log("Maior altura: "+maiorAltura)
console.log("Menor altura: "+menorAltura)
console.log("A media da altura masculina: "+media)
console.log("Quantidade de mulheres: "+fem.length)