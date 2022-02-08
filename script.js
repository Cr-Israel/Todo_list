let lista = document.getElementById("lista");
let input = document.getElementById("input-principal");
let botao = document.getElementById("btn");
let nodelist = document.getElementsByTagName("li");

let i;

for (i = 0; i < nodelist.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("MeuValor");
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}

function novoElemento() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input-principal").value;
    var td = document.createTextNode(inputValue);
    li.appendChild(td);
    document.getElementById("lista").appendChild(li);
}
