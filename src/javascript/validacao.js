function verificaChute(chute) {
  const num = +chute;

  if (chuteForInvalido(num)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
          <h2>Game Over!!!</h2>
          <h3>Pressione o botão para jogar novamente</h3>
          <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
          `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>Valor Inválido</div>";
    }
  }

  if (chuteForMaiorOuMenor(num)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (num === numSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `;
  } else if (num > numSecreto) {
    elementoChute.innerHTML += `<div class="maior-menor">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  } else if (num < numSecreto) {
    elementoChute.innerHTML += `<div class="maior-menor">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
  }
}

function chuteForMaiorOuMenor(num) {
  return num > maiorValor || num < menorValor;
}

function chuteForInvalido(num) {
  return Number.isNaN(num);
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
