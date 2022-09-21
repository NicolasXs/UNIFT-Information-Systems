function random() {
    let n1 = Number(
      window.prompt("Tente adivinhar o número escolhido de 0 a 100")
    );

    let n2 = Math.floor(Math.random() * 100) + 1;

    if (n1 > n2) {
      window.alert(
        `Errou.\n \nO número sorteado foi ${n2}, menor que ${n1}`
      );
    } else if (n1 < n2) {
      window.alert(
        `Errou.\n \n O número sorteado foi ${n2}, maior que ${n1}`
      );
    } else {
      window.alert("Parabéns você acertou!");
    }
  }