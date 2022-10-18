function limpar(){
    var res = document.getElementById("resposta");
    res.innerHTML = "";
}

function _if() {

    var res = document.getElementById("resposta");
    var num = document.getElementById("numero").value;
    var valor = "O valor digitado é "

    res.innerHTML = "<h3>Retorno do if</h3>";
    if (num > 5) {
        valor = "maior";
    } else if (num < 5) {
        valor = "menor";
    } else {
        valor = "igual";
    }

    res.innerHTML += "o valor digitado é <strong>" + valor + "</strong> que 5<br>";
}

function _switch(){

    var res = document.getElementById("resposta");
    var diaSemana = document.getElementById("numero").value;
    var nomeDiaSemana = "";
    
    // o switch-case compara com ===
    // pode converter ou comparar como string
    diaSemana = parseInt(diaSemana);

    switch(diaSemana) {
        case 1:
            nomeDiaSemana = "Domingo";
            break;
        case 2:
            nomeDiaSemana = "Segunda-feira";
            break;
        case 3:
            nomeDiaSemana = "Terça-feira";
            break;
        case 4:
            nomeDiaSemana = "Quarta-feira";
            break;
        case 5:
            nomeDiaSemana = "Quinta-feira";
            break;
        case 6:
            nomeDiaSemana = "Sexta-feira";
            break;
        case 7:
            nomeDiaSemana = "Sábado";
            break;
        default:
            nomeDiaSemana = "Não existente!"
    }

    res.innerHTML = "<h3>Retorno do switch</h3>";
    res.innerHTML += "O número digitado corresponde a <strong>" + nomeDiaSemana + "</strong>";
}

function _for(){

    var res = document.getElementById("resposta");
    var parada = document.getElementById("numero").value;
    
    res.innerHTML = "<h3>Retorno do for</h3>";

    for(var i=0; i<parada; i++){
        res.innerHTML += "Contando com for... " + i + "<br>";
    }
}

function _while(){

    var res = document.getElementById("resposta");
    var parada = document.getElementById("numero").value;
    
    res.innerHTML = "<h3>Retorno do while</h3>";

    var i = 0;

    while (i<parada){
        res.innerHTML += "Contando com while... " + i + "<br>";
        i++;
    }
}

function _do_while(){

    var res = document.getElementById("resposta");
    var parada = document.getElementById("numero").value;
    
    res.innerHTML = "<h3>Retorno do do-while</h3>";

    var i = 0;

    do{
        res.innerHTML += "Contando com do-while... " + i + "<br>";
        i+=2;
    } while (i<parada);
}