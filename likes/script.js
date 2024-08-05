let likeBtn = document.getElementById('like');
let displayLike = document.getElementById('likeDisplay');
let deslikeBtn = document.getElementById('deslike');
let displayDeslike = document.getElementById('deslikeDisplay');

let contadorLike = 0;
likeBtn.addEventListener('click', ()=> {
    contadorLike += 1
    displayLike.textContent = contadorLike;
})


let contadorDeslike = 0;
deslikeBtn.addEventListener('click', ()=> {
    contadorDeslike += 1
    displayDeslike.textContent = contadorDeslike;
})

// let contadorDeslike = 0;
// deslikeBtn.addEventListener('click', ()=> {
//     contadorLike -= 1
//     displayLike.textContent = contadorLike;
//     contadorDeslike += 1
//     displayDeslike.textContent = contadorDeslike;
// })