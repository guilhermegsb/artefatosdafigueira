var imagens = [
  "imags/casa_blocos2.JPG",
  "imags/IMG_8550.JPG",
  "imags/ENTRADA_PILAR2.jpg",
  "imags/img1.jpg",
  "imags/img2.jpg",
  "imags/muro_blocos.jpg",
  "imags/MURO_ROSA.jpg",
  "imags/MURO_SEM_PINTAR.jpg",
  "imags/IMG_8527.JPG",
  "imags/IMG_8552.JPG",
  "imags/IMG_8554.JPG"
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
  
  var imagensDiv = document.getElementsByClassName("imagens")[0];
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


  

function initMap() {
  var uluru = {lat: -23.5505, lng: -46.6333};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


