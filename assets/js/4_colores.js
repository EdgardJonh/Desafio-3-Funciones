let cambiaColor = function (color ,pintar) {
   color.style.backgroundColor= pintar
}

document.addEventListener('click' , (e)=>{
    let color = `#${e.target.id}`
    let colores = document.querySelector(color)
    cambiaColor(colores, 'black')
   
})