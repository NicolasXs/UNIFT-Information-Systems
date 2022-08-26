function teste() {
  let num = Number(window.prompt("Digite um número: "));
  let tipo;
  if (num % 2 == 0) {
    tipo = "PAR";
  } else {
    tipo = "IMPAR";
  }
  let res = document.querySelector("section#result");
  res.innerHTML = `<p>O numero ${num} é ${tipo}</p>`;
}

function maiorOuNao() {
  let n1 = Number(window.prompt("Digite um número: "));
  let n2 = Number(window.prompt("Digite outro número: "));
  let res2 = document.querySelector("section#res2");

  if (n1 > n2) {
    res2.innerHTML = `<p> ${n1} é maior que ${n2}</p>`;
  } else if (n1 < n2) {
    res2.innerHTML = `<p> ${n1} é menor que ${n2}</p>`;
  }else {
      res2.innerHTML = `<p>${n1} é igual a ${n2}</p>`;
  }
}
