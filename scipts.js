const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarmodal(){
    modal.style.left = '30%'
    mascara.style.visibility = 'visible'
}
function escondermodal(){
    modal.style.left = '-100%'
    mascara.style.visibility = 'hidden'
}