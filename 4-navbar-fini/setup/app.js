// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


let nav = document.querySelector('.links');

let btn = document.querySelector('.nav-toggle');


let flag = 1
btn.addEventListener('click',function(){

    if(flag ==1){
        btn.style.transform= 'rotate(90deg)';
        nav.classList.add('show-links');
        flag = 0;
    }
    else{
        btn.style.transform= 'rotate(-0deg)';
        nav.classList.remove('show-links');
        flag = 1;
    }
    
})