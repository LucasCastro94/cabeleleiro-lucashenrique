const menuDiv = document.getElementById('menu-mobile')
const btnMenu = document.getElementById('btn-click')
const menuIcon = document.getElementById('menu-icon')
const navLinksMobile = menuDiv.querySelectorAll('a');



btnMenu.addEventListener('click',abrirMenu)

 function abrirMenu(){
 menuDiv.classList.toggle('abrir')

}

navLinksMobile.forEach(link =>{
link.addEventListener('click',abrirMenu)
})

