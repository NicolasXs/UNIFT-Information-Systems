function consumo() {
  const nomeAlimento = document.getElementById("alimento").value;
  const qtdAlimento = document.getElementById("gramas").value;
  const diasAlimento = document.getElementById("dias").value;
  const familia = document.getElementById("familia").value;

  const res = document.querySelector("div#container")

  const conversao = qtdAlimento / 1000; //Conversão de gramas pra kilo

  const semanal = qtdAlimento * diasAlimento * familia / 1000; //Calculo de consumo semanal em kilos

  const mensal = qtdAlimento * diasAlimento * familia * 4 / 1000 + conversao * 2; //Calculo de consumo mensal em kilos

 
  res.innerHTML = `<h3>Produto: ${nomeAlimento}</h3>`;
  res.innerHTML += `<h3>Peso: ${conversao} KG</h3>`;
  res.innerHTML += `<h3>Consumo Semanal: ${semanal} KG</h3>`;
  res.innerHTML += `<h3>Consumo Mensal: ${mensal} KG</h3>`;
}
