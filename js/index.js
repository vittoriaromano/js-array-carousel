'use strict'
//array imagini
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//preparare una variabile per inserire le immagini nel'html
let contentItem = '';
let active = 0;
const slider = document.querySelector('.slider');


//inseriamo le imagini nel html
let i = 0
while(i < imgs.length){
    console.log(imgs[i]);
    contentItem += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`
    i++;

}

slider.innerHTML =  slider.innerHTML + contentItem;
document.querySelector('.item').classList.add('show');

//prepariamo le variabili per inserire le funzioni di movimento immagini
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const item = document.querySelectorAll('.item');
console.log(item);


//movimento immagini al'indietro
up.addEventListener('click', function(){
   if(active > 0){
        console.log(' decreasing active');
       
        item[active].classList.remove('show');
        active--;
        item[active].classList.add('show')
    }
    
});

//movimento immagini in avanti
down.addEventListener('click', function(){

    if(active < item.length - 1){
        console.log('incremento active');

        item[active].classList.remove('show');
        active++;
        item[active].classList.add('show')
    }
    
});
