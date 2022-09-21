function calcular() {
  let n1 = Number(window.prompt("Digite um numero: "));
  let res = document.querySelector("section#res");
  res.innerHTML = `<p>O dobro de ${n1} é ${n1 * 2}, e a metade de ${n1} é ${n1 / 2}!</p>`;
}

function somar() {
  let n1 = Number(window.prompt("Digite um numero: "));
  let n2 = Number(window.prompt("Digite outro numero: "));
  let res2 = document.querySelector("section#res2");
  res2.innerHTML = `<p>A soma de ${n1} e ${n2} é ${n1 + n2}!</p>`;
}
