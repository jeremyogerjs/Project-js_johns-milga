// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const loader = document.querySelector('.preloader');
const video = document.querySelector('.video-container');
const btnPlayer = document.querySelector('.switch-btn');
const btnSwitch = document.querySelector('.switch');

window.onload = function(){

    loader.classList.add('hide-preloader');

    btnPlayer.addEventListener('click',function(){
   
        if(!btnPlayer.classList.contains('slide')){
            btnPlayer.classList.add('slide'); 
            video.pause();
        }
        else{
            btnPlayer.classList.remove('slide');
            video.play();
        }
    
    
    })
    
}
