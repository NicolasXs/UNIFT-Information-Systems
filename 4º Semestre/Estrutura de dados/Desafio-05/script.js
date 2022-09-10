class Stack {
  constructor() {
    this.items = [];
  }
  pushStack(element) {
    this.items.push(element);
  }
  popStack() {
    return this.items.pop();
  }
  peekStack() {
    return this.items[this.items.length - 1];
  }
  isEmptyStack() {
    return this.items.length === 0;
  }
  sizeStack() {
    return this.items.length;
  }
  clearStack() {
    this.items = [];
  }
}

const rStack = new Stack();
const pStack = new Stack();

function palindromo() {
  let res = document.querySelector("section#res");
  let index = 0;
  var string1 = "";
  var string2 = "";
  var palavradigitada = document.getElementById("palindromo").value;
  while (index < palavradigitada.length) {
    rStack.pushStack(palavradigitada[index]);
    index++;
  }

  let i = rStack.sizeStack() - 1;
  while (i >= 0) {
    pStack.pushStack(palavradigitada[i]);
    i--;
  }
  while (!rStack.isEmptyStack()) {
    string1 += rStack.popStack().toString();
  }
  while (!pStack.isEmptyStack()) {
    string2 += pStack.popStack().toString();
  }
  if (string1 == string2) {
    res.innerHTML = string1 + " é um palindromo!";
  } else {
    res.innerHTML = string1 + " não é um Palíndromo!";
  }
}
