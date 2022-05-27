const slides=document.querySelector(".slides")
const slides2=document.querySelectorAll(".slides>img");
console.log(slides2)
slides.setAttribute("data-position",0);
let current=0;
let slideCount=slides2.length
let lastIndex=slides2.length-1
console.log(slideCount)
// slides.style.transform=`translateX(${-1*(480)}px)`
document.querySelector(".btn-prev").addEventListener("click",function(){
    console.log(slides.style.transform)
    console.log(current)
if (current==0) {
current=lastIndex
slides.style.transform=`translateX(${-1*(lastIndex*480)}px)`
slides.setAttribute("data-position",-1*(lastIndex*480))
} 
else {
    current--;
    slides.style.transform=`translateX(${parseInt(slides.getAttribute("data-position"))+ 480}px)`
slides.setAttribute("data-position",parseInt(slides.getAttribute("data-position"))+480);
}
console.log(slides.style.transform)
})

document.querySelector(".btn-next").addEventListener("click",function(){
if (current==lastIndex) {
    current=0;
    slides.style.transform=`translateX(${0}px)`
    slides.setAttribute("data-position",0)
} 
else {
    current++
        slides.style.transform=`translateX(${parseInt(slides.getAttribute("data-position"))- 480}px)`
    slides.setAttribute("data-position",parseInt(slides.getAttribute("data-position"))-480);
}

    })
// document.querySelector(".btn-next").addEventListener(function(){

// })
//const slides2=document.querySelectorAll(".slide");
slides2.forEach(function(slide,index){
// slide.style.transform=`translateX(${index*100}%)`
})