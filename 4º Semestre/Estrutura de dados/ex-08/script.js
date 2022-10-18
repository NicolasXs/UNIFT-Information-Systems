const lista = new LinkedList();

function adicionar() {
  const element = document.getElementById("elemento").value;
  const index = document.getElementById("index").value;
  var res = document.querySelector("section#res");
  document.getElementById("elemento").value = "";
  document.getElementById("index").value = "";

  if (index == "") {
    lista.push(element);
  } else {
    lista.insert(element, index);
  }

  res.innerHTML = lista.toString();
  console.log(lista.size());

  //   res.innerHTML = lista.size();
}

function remover() {
  const element = document.getElementById("elemento").value;
  const index = document.getElementById("index").value;
  document.getElementById("elemento").value = "";
  document.getElementById("index").value = "";

  if (element != "") {
    lista.remove(element);
    res.innerHTML = lista.toString();
  } else {
    lista.removeAt(index)
    res.innerHTML = lista.toString();
  }
}
