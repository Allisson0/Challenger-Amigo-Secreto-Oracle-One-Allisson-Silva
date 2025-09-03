//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//criação da lista e da seleção do elemento lista do HTML.
let listaAmigo = []
let lista = document.getElementById("listaAmigos");

//Função que define que, ao apertar o botão de Adicionar o amigo, o amigo será adicionado.
function adicionarAmigo(){

    // alterarPlaceHolder("Digite um nome");
    
    //pegando o input de id "amigo"
    let amigo = document.getElementById("amigo").value;

    //Condição de verificação se houve ou não digitação no campo correto.
    if(amigo!=""){    

        //Adicionar o novo amigo à lista e já pega o novo tamanho da lista.
        let tamanho = listaAmigo.push(amigo);

        //função que apaga toda a lista da Lista ul para fins de verificação e correção de bugs
        lista.innerHTML = '';

        //for que cria uma série de itens "li" do HTML com base na listaAmigo.
        for(let i = 0;tamanho > i;i++){

            //criação do novo elemento li
            let novoAmigo = document.createElement('li');

            //adicionando texto ao novo elemento li
            novoAmigo.innerHTML = listaAmigo[i];

            //inserindo o novo elemento li à lista HTML principal ul
            lista.append(novoAmigo);
        }

        limparCampo("amigo");
    }

    //Caso não tenha sido digitado nada no input, o site emitirá um aviso em alert.
    else{
        alert("Insira um nome por favor.");

        // alterarPlaceHolder("DIGITE UM NOME POR FAVOR");
    }
}

//Função de alteração de PlaceHolder de inputs.
// function alterarPlaceHolder(novoPlaceholder){
//     let campo = document.getElementById("amigo");
//     campo.setAttribute("placeholder", novoPlaceholder);
// }

//Função para limpar o valor do campo em questão
function limparCampo(campo){
    tag = document.getElementById(campo);
    tag.value=  "";
}

//Função de sorteio do amigo secreto, ao clicar do botão "Sortear"
function sortearAmigo(){
    //tamanho da lista atual
    tamanho = listaAmigo.length;

    //verificando se a lista não é nula (ao menos uma pessoa na lista - lista não nula - base de instruções da Oracle Challenge One)
    if (tamanho != 0){

        //sorteando o item
        let sorteio = parseInt(Math.random() * tamanho);

        //tag de id "resultado" para inserção do resultado
        let resultado = document.getElementById("resultado");

        //definindo uma saída de resultado no HTML
        resultado.innerHTML = "O seu amigo secreto sorteado é: " + listaAmigo[sorteio];
    }

    else{
        alert("Por favor, insira ao menos um amigo para sortear.");
    }
}