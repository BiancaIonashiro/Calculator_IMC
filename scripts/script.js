const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  calculatorImc();
});

formulario.addEventListener("reset", (event) => {
  limpar();
});

function calculatorImc() {
  // const genero = document.getElementById("genre").value;
  //const idade = document.getElementById("age").value;
  const peso = document.getElementById("weight").value;
  const altura = document.getElementById("height").value;
  //const termoDeAceite = document.getElementById("validatorCheckbox").checked;

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  if (Number(imc) /* && termoDeAceite && idade && genero*/) {
    document.getElementById("resultImc").innerHTML = imc;
    document.getElementById("descriptionResult").innerHTML = validarImc(imc);
  }
}
const validarImc = (imc) => {
  let resultado;
  const resultTag = document.getElementById("resultTag");
  if (imc <= 16) {
    resultado = "Abaixo do peso ⚠️";
    resultTag.style.backgroundColor = "#F0A500";
  } else if (imc >= 16 && imc <= 40) {
    resultado = "Peso normal ✅";
    resultTag.style.backgroundColor = "#1E5128";
  } else {
    resultado = "Acima do peso ❗❗ ";
    resultTag.style.backgroundColor = "#950101";
  }
  return resultado;
};

function limpar(event) {
  document.getElementById("resultImc").innerHTML = "";
  document.getElementById("descriptionResult").innerHTML = "";
  const resultTag = document.getElementById("resultTag");
  resultTag.style.backgroundColor = "#252525";
}
