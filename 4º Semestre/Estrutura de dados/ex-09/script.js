const conjunto = new Set();

var fruta = new Object();

fruta.uva = "🍇";
fruta.pera = "🍐";
fruta.maça = "🍎";
fruta.manga = "🥭";
fruta.banana = "🍌";
fruta.cereja = "🍒";
fruta.abacate = "🥑";
fruta.laranja = "🍊";
fruta.morango = "🍓";
fruta.abacaxi = "🍍";
fruta.melancia = "🍉";

function adicionar() {
  const element = document.getElementById("elemento").value.toLowerCase();
  document.getElementById("elemento").value = "";
  const res = document.querySelector("section#res");

  if (fruta[element] != undefined) {
    conjunto.add(fruta[element]);
    res.innerHTML = conjunto.values();
  } else {
    conjunto.add(element);

    res.innerHTML = conjunto.values();
  }
  console.log(conjunto);
}

function remover() {
  const element = document.getElementById("elemento").value.toLowerCase();
  const res = document.querySelector("section#res");
  document.getElementById("elemento").value = "";

  if (element == "") {
    conjunto.clear();
    res.innerHTML = conjunto.values();
  } else if (fruta[element] != undefined) {
    conjunto.delete(fruta[element]);
    res.innerHTML = conjunto.values();
  } else {
    conjunto.delete(element);
    res.innerHTML = conjunto.values();
  }
  console.log(conjunto);
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let btn = document.querySelector("#submit");

    btn.click();
  }
});
