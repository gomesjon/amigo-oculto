//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaDeNumerosSorteados = [];
let numeroSorteado = "";
let listaDeAmigos = document.getElementById("listaAmigos");
let listaResultado = document.getElementById("resultado");
let quantidaDeSorteios = 0;
let amigosIndice = 0;

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if(nome != ""){
        amigos.push(nome);
        limparCampo();
        exibirAmigos(); 
    }else{
        alert("Por favor, insira um nome.");
    }
}

function exibirAmigos() {
    amigosIndice =0;
    limparLista();

    for (i = 1; i <= amigos.length; i++) {
        let lista = document.createElement("li");
        let valor = innerHTML = amigos[amigosIndice];
        amigosIndice++;
        lista.appendChild(document.createTextNode(valor));
        listaDeAmigos.appendChild(lista);
    }

}

function sortearAmigo() {
    if (amigos.length > 1) {
        if (quantidaDeSorteios < amigos.length){
            numeroSorteado = selecionarAmigo();
            limparLista();
            let lista = document.createElement("li");
            let valor = innerHTML = amigos[numeroSorteado];
            lista.appendChild(document.createTextNode(valor));
            listaResultado.appendChild(lista);
            document.getElementById("adicionar-a-lista"). setAttribute("disabled", true)
            setTimeout(limparLista, 3000);
            quantidaDeSorteios++;
        }else{}

        if(quantidaDeSorteios == amigos.length){
            document.getElementById("botao-restart").removeAttribute("disabled");
            document.getElementById("botao-sortear").setAttribute("disabled", true);
        }
    }else{
        let mensagem = document.getElementById("mensagemNaTela");
        mensagem.innerHTML = "Lista incompleta, Digite mais nomes";

        function mensagemAtraso(){
            mensagem.innerHTML = "Digite o nome dos seus amigos";
        }
        setTimeout(mensagemAtraso, 3000);  
    }
}

function selecionarAmigo() {
    let numeroEscolhido = parseInt(Math.random() * amigos.length);

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return selecionarAmigo();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;   
    }
}

function limparLista(){
    listaDeAmigos.innerHTML = "";
    listaResultado.innerHTML = "";
}

function limparCampo() {
    nome = document.getElementById("amigo");
    nome.value = "";
}

function reiniciarSorteio() {
    amigos = [];
    listaDeNumerosSorteados = [];
    quantidaDeSorteios = 0;
    amigosIndice = 0;
    limparLista();
    limparCampo();
    document.getElementById("botao-restart").setAttribute("disabled", true);
    document.getElementById("botao-sortear").removeAttribute("disabled");
    document.getElementById("adicionar-a-lista").removeAttribute("disabled");
}
