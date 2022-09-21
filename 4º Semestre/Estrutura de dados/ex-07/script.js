const fila = new Queue();

function adicionar() {
  const add = document.getElementById("adicionar").value;
  var res = document.querySelector("section#res");
  document.getElementById("adicionar").value = "";

  fila.enqueue(add);
  res.innerHTML = fila.toString();
  console.log(fila.size());

  //   res.innerHTML = fila.size();
}

function remover() {
  fila.dequeue();
  res.innerHTML = fila.toString();
  console.log(fila.size());
}
