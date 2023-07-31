var imagens = [
    "./images/mini11.jpg",
    "./images/mini12.jpg",
    "./images/mini3.jpg",
    "./images/mini14.jpg",
    "./images/mini15.jpg",
    "./images/mini9.jpg",
    "./images/mini7.jpg",
    "./images/mini10.jpg",
    "./images/mini6.jpg",
    "./images/mini8.jpg",
   
  ];

  // Referência ao elemento do carrossel
  var carrossel = document.getElementById("carrossel");

  
  for (var i = 0; i < imagens.length; i++) {
    //cria uma div 
    var divItem = document.createElement("div");
    //coloca uma class na div chamada 'item'
    divItem.classList.add("item");
    
    //cria uma tag img
    var img = document.createElement("img");
    //seta propriedadade src
    img.src = imagens[i];
    //seta propriedade alt
    img.alt = "Imagem " + (i + 1);
    
    //seta a tag img criada dentro da div criada
    divItem.appendChild(img);

    //seta a div com a tag img criada dentro da div com id carrosel
    carrossel.appendChild(divItem);
  }