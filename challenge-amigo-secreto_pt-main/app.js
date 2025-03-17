// Cria uma lista vazia para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o elemento de entrada do usuário
    let input = document.getElementById("amigo");
    let nome = input.value;// Pega o nome digitado pelo usuário
    
    console.log("Nome digitado:", nome); // Exibe no console o nome digitado
    
     // Verifica se o nome não está vazio
    if (nome !== "") {
        listaAmigos.push(nome); // Adiciona o nome à lista de amigos
        console.log("Lista de amigos:", listaAmigos); // Exibe a lista no console
        atualizarLista(); // Atualiza a lista na interface
        input.value = ""; // Limpa o campo de entrada após adicionar o nome
   
    } else {
        // Alerta caso o nome esteja vazio
        alert('Esse nome não é válido, digita um novo por favor');
    }
}

// Função para atualizar a lista exibida na página
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém a lista no HTML
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la

    // Percorre todos os nomes da lista e os adiciona na tela
    for (let i = 0; i < listaAmigos.length; i++) {

        let item = document.createElement("li"); // Cria um item de lista (<li>)
        item.textContent = listaAmigos[i]; // Define o texto do item como o nome do amigo
        lista.appendChild(item); // Adiciona o item à lista exibida
    }
}

// Função para sortear um amigo secreto
function sortearAmigo(){

    // Gera um índice aleatório dentro do tamanho da lista
    let posAleatoria = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[posAleatoria];// Pega o nome correspondente ao índice sorteado

    console.log("lista de amigos criada:", nomeSorteado); // Exibe o nome sorteado no console

    // Verifica se há amigos na lista antes de sortear
    if (listaAmigos.length === 0) { 
        // Exibe o nome sorteado na tela
        alert("Esse número não é valido, digite um novo")}        
    else{
        // Exibe o nome sorteado na tela
        document.getElementById("resultado").innerHTML =`O amigo secreto que foi sorteado é: ${nomeSorteado}`;

        // Como ponto adicional, um teste de como atualiza a página após 10 segundos
        setTimeout(function() { location. reload(); }, 10000)
    }
   
}