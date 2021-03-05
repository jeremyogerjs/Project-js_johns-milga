const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];



let main = document.querySelector('main');
let colorD = document.querySelector('.color');


let button = document.querySelector(".btn");




button.addEventListener("click",() =>{

    randomColor()
})




function randomColor(){
    for( let i= 0;i<colors.length;i++){

            main.style.color = colors[i];
            color.textContent = colors[i];
    }
}

