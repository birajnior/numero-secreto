const menorValor = 1
const maiorValor = 100

const numSecreto = gerarNumAleatorio();


function gerarNumAleatorio() {
  return parseInt(Math.random() * maiorValor + 1)
}

console.log(`O número é: ${numSecreto}`);

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor