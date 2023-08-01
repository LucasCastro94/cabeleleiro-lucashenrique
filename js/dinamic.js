var imagens = [
  "./images/modelos/modelo1.jpeg",
   "./images/modelos/modelo2.jpeg",
   "./images/modelos/modelo3.jpeg",
   "./images/modelos/modelo4.jpeg",
   "./images/modelos/modelo5.jpeg",
   "./images/modelos/modelo6.jpeg",
   "./images/modelos/modelo7.jpeg",


];

var carrossel = document.getElementById("carrossel");


for (var i = 0; i < imagens.length; i++) {
  var divItem = document.createElement("div");
  divItem.classList.add("item");

  var img = document.createElement("img");
  img.src = imagens[i];
  img.alt = "Imagem " + (i + 1);

  divItem.appendChild(img);

  carrossel.appendChild(divItem);
}