//using selectors inside the element
// traversing the dom

let ancrage = document.querySelector('.section-center');
//btn partie1
let aggrandir1 = ancrage.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
let reduire1 = ancrage.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
let text1 = ancrage.firstElementChild.lastElementChild;
//btn partie2
let aggrandir2 = ancrage.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.firstElementChild;
let reduire2 = ancrage.firstElementChild.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
let text2 = ancrage.firstElementChild.nextElementSibling.lastElementChild;

//btn partie3

let aggrandir3 = ancrage.lastElementChild.firstElementChild.lastElementChild.firstElementChild;
let reduire3 = ancrage.lastElementChild.firstElementChild.lastElementChild.lastElementChild;
let text3 = ancrage.lastElementChild.lastElementChild;
console.log(reduire3)
console.log(aggrandir3)
console.log(text3);

let removeData = function(data,aggrandir,reduire){

    data.classList.remove('show-text');
    data.style.display = 'none';

    aggrandir.style.display = 'initial';
    reduire.style.display = 'none';

}

let afficherData = function(data,aggrandir,reduire){

    data.classList.add('show-text');
    data.style.display = 'initial';

    aggrandir.style.display = 'none';
    reduire.style.display = 'initial';
}

    aggrandir1.addEventListener('click',function(){

        afficherData(text1,aggrandir1,reduire1);
       
    });

    aggrandir2.addEventListener('click',function(){

        afficherData(text2,aggrandir2,reduire2);
        
    });

    aggrandir3.addEventListener('click',function(){

        afficherData(text3,aggrandir3,reduire3);
        
    });

    reduire1.addEventListener('click',function(){

        removeData(text1,aggrandir1,reduire1);
        
    })

    reduire2.addEventListener('click',function(){

        removeData(text2,aggrandir2,reduire2);
       
    })

    reduire3.addEventListener('click',function(){

        removeData(text3,aggrandir3,reduire3);
       
    })

