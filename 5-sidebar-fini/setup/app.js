let button = document.querySelector(".sidebar-toggle");

let closeBtn = document.querySelector('.close-btn');

let menuAside = document.querySelector('.sidebar');

closeBtn.addEventListener('click',function(){

    menuAside.classList.remove('show-sidebar');
    
    flag =1;

});
let flag = 1;
button.addEventListener('click',function(){
    
    if(flag == 1){
        menuAside.classList.add('show-sidebar');
        flag = 0;
    }
    else{  
        menuAside.classList.remove('show-sidebar');
        flag = 1;
    }
    
})