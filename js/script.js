const menuDiv = document.getElementById('menu-mobile')
const btnMenu = document.getElementById('btn-click')
const menuIcon = document.getElementById('menu-icon')
const secoes = document.querySelectorAll('section');
const navLinksMobile = menuDiv.querySelectorAll('a');
const logoImg = document.getElementById('logoImg')
const historia =  document.getElementById('historia')

window.addEventListener('load', () => {
    logoImg.classList.add('transition-img')
    historia.classList.add('transition-img')
});


btnMenu.addEventListener('click', abrirMenu)

secoes.forEach((secao) => {
    secao.addEventListener('click', fecharMenu)
});

window.addEventListener('scroll', fecharMenu)



function abrirMenu() {
    menuDiv.classList.toggle('abrir')

}

function fecharMenu() {
    menuDiv.classList.remove('abrir')
}

navLinksMobile.forEach(link => {
    link.addEventListener('click', abrirMenu)
})


