const menuDiv = document.getElementById('menu-mobile')
const btnMenu = document.getElementById('btn-click')
const menuIcon = document.getElementById('menu-icon')
const secoes = document.querySelectorAll('section');
const navLinksMobile = menuDiv.querySelectorAll('a');



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


