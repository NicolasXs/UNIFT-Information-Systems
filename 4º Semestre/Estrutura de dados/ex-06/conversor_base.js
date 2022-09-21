function start() {
  const value = document.getElementById("decimal").value;
  const base = document.getElementById("select").value;
  baseConverter(value, base);
}

function baseConverter(decNumber, base) {
  const res = document.querySelector("section#res");
  const remStack = new Stack(); // instanciando nossa classe
  const digts = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digts[remStack.pop()];
  }
  return (res.innerHTML += String(baseString + "<br>"));
}
