// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

let nav = document.querySelector('#nav');

let date = document.querySelector('#date');

let scroller = document.querySelector('.top-link');

let btnMobile = document.querySelector('.nav-toggle');

let linksContainer = document.querySelector('.links-container');
console.log(linksContainer)
// ********** set date ************

let dateNow = new Date();
console.log(dateNow.getFullYear())

let afficherDate = function(){
    date.textContent = dateNow.getFullYear();
    
}
afficherDate();
// ********** close links ************

btnMobile.addEventListener('click',()=>{
   

    if(linksContainer.getBoundingClientRect().height == 0){
        linksContainer.style.height = '200px';
        
    }
    else{
        linksContainer.style.height = 0;
       
    }
   

})
// ********** fixed navbar ************
window.addEventListener('scroll',function(){
    if(pageYOffset >= 100){
        nav.classList.add('fixed-nav');
    }
    else{
        nav.classList.remove('fixed-nav');
    }

    if(pageYOffset >= 480){
        scroller.classList.add('show-link');
    }
    else{
        scroller.classList.remove('show-link');
    } 
});
// ********** smooth scroll ************
// select links
let links = document.querySelectorAll('.scroll-link');

links.forEach((link)=>{

    link.addEventListener('click',(e) =>{
        e.preventDefault();
        
        const id = e.currentTarget.getAttribute('href').slice(1);   //recupere l'id en enlevant le sharp
        const element = document.getElementById(id);                //recupere la div correspondante a l'id.
        const fixedNav = nav.classList.contains('fixed-nav');   //recupere un booléen 
        const navHeight = nav.getBoundingClientRect().height;   //recupere la hauteur de la barre nav
        let position = element.offsetTop - navHeight;
        
        if(!fixedNav){
            position = position - navHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    })

});


