var imagens = [
    "imags/IMG_8534.jpg",
    "imags/IMG_8520.jpg",

    "imags/IMG_8516.jpg",
    "imags/IMG_8527.jpg"
  ];
  var imagensCarregadas = [];
  for (var i = 0; i < imagens.length; i++) {
    var img = new Image();
    img.src = imagens[i];
    imagensCarregadas.push(img);
  }


  document.addEventListener("DOMContentLoaded", function() {
    atualizarImagem(0); // carrega a primeira imagem da lista
  });
  
  var indiceAtual = 0;
  var botao = document.querySelector(".next");
  
  function atualizarImagem(incremento) {
    indiceAtual += incremento; // atualiza o índice atual de acordo com o incremento recebido
    if (indiceAtual < 0) {
      indiceAtual = imagens.length - 1; // volta para a última imagem se o índice ficar negativo
    } else if (indiceAtual >= imagens.length) {
      indiceAtual = 0; // volta para a primeira imagem se o índice ultrapassar o tamanho do array
    }
  
    var img = document.createElement("img");
    img.src = imagens[indiceAtual];
    img.setAttribute("data-numero", indiceAtual + 1);
    img.setAttribute("alt", "Imagem " + (indiceAtual + 1));
    img.classList.add("imagem-container");
    
    var imagensDiv = document.getElementById("imagens");
    imagensDiv.innerHTML = "";
    imagensDiv.appendChild(img);
  }
  
  var botaoVoltar = document.getElementsByClassName("back")[0];
  botaoVoltar.addEventListener("click", function() {
    atualizarImagem(-1);
  });
  
  botao.addEventListener("click", function() {
    atualizarImagem(1);
  });