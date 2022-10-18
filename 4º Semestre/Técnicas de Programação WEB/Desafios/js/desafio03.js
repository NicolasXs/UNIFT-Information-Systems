function gerar() {
  limpar();
  var res = document.getElementById("resposta");

  const linhas = document.getElementById("linhas").value;
  document.getElementById("linhas").value = "";

  const colunas = document.getElementById("colunas").value;
  document.getElementById("colunas").value = "";

  let table = document.createElement("table");

  document.getElementById("resposta").appendChild(table);

  if (linhas <= 0 || (linhas == "" || colunas <= 0) || colunas == "") {
    res.innerHTML = `<div class="error">Digite um número valido</div>`
  } else {
    for (let i = 0; i < linhas; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);

      for (let i = 0; i < colunas; i++) {
        let coll = document.createElement("td");
        coll.innerHTML = "X";
        table.appendChild(coll);
      }
    }
  }
}

function limpar() {
  var res = document.getElementById("resposta");
  res.innerHTML = "";
}
