function fibonacci() {
    var fibonacci = [];

    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i < 20; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    
    fibonacci.shift()
    let res = document.querySelector("section#res");
    res.innerHTML = fibonacci
  }

