// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

//btn
let btnModal = document.querySelector('.modal-btn');
let btnClose = document.querySelector('.close-btn');

//container modal
let overlay = document.querySelector('.modal-overlay');
let openModal = document.querySelector('.modal-container');



btnModal.addEventListener('click',function(){

    overlay.classList.add('open-modal');
});

btnClose.addEventListener('click',function(){

    overlay.classList.remove('open-modal');
})