//? MenuList Header open/close
const menulistButton=document.querySelector(".bi-list");
const menuList=document.querySelector(".header_center");
const menuListClose=document.querySelector(".menucircle");

menulistButton.addEventListener("click",()=>{
    menuList.style.left=0
});
menuListClose.addEventListener("click",()=>{
    menuList.style.left="-100%"
})



//* Slider Not Use Library//

sliderIndex=0;

const slides=document.querySelectorAll(".slider-item");
const dots=document.querySelectorAll(".dots");
const dotspan=document.querySelectorAll(".dotspan");
const searchButton=document.querySelector(".bi-search");

window.addEventListener("load",()=>{
    dotspan[0].style.opacity=1
})
dots.forEach((dot,index)=>{
    dot.addEventListener('click',()=>{
        showSlide(index)
        dotspan.forEach(item=>{
            item.style.opacity=0.4;
            
        })
        dotspan[index].style.opacity=1;

    })
})


function ChangeIndex (n){
    sliderIndex +=n
    
    
    
     if(sliderIndex <0){
        sliderIndex=slides.length -1;
     }
     else if(sliderIndex>slides.length -1){
         sliderIndex=0
     }
    showSlide(sliderIndex)

}

showSlide()

function showSlide (n=0){
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none"
    
    }
     slides[n].style.display="flex"

}

//! Serach Modal Js
 const closeSearch=document.querySelector(".circleSerch");
 const searchModal=document.querySelector(".modalContainer")

searchButton.addEventListener("click",()=>{
    searchModal.style.visibility="visible"
})

closeSearch.addEventListener("click", ()=>{
    searchModal.style.visibility="hidden"

})


// let sum = 0;
// let number = parseInt(prompt('Enter a number: '));
// while(number >= 0) {
//  sum += number;
//  number = parseInt(prompt('Enter a number: '));
// }
// console.log(`The sum is ${sum}.`);


