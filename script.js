const selectCircle=()=>{
    circles.forEach(function(circle){
        circle.style.backgroundColor=""
        })
        circles.forEach(function(circle){
    
            if (circle.getAttribute("data-index")==current) {
                circle.style.backgroundColor="rgb(210,210,210)"
            }
        
})
}
const nextSlide=()=>{
    console.log(`current before: ${current}`)
    selectCircle()
if (current==lastIndex) {
    current=0;
    slides.style.transform=`translateX(${0}px)`;
    slides.setAttribute("data-position",0);
} 
else {
    current++
        slides.style.transform=`translateX(${parseInt(slides.getAttribute("data-position"))- 480}px)`;
    slides.setAttribute("data-position",parseInt(slides.getAttribute("data-position"))-480);
}
selectCircle();
}

const prevSlide=()=>{
    // console.log(current);
    if (current==0) {
        current=lastIndex;
        slides.style.transform=`translateX(${-1*(lastIndex*480)}px)`;
        slides.setAttribute("data-position",-1*(lastIndex*480));
        } 
        else {
            current--;
            slides.style.transform=`translateX(${parseInt(slides.getAttribute("data-position"))+ 480}px)`;
        slides.setAttribute("data-position",parseInt(slides.getAttribute("data-position"))+480);
        }
        selectCircle();
        
        console.log(slides.style.transform);
}

setInterval(nextSlide,5000)

const slides=document.querySelector(".slides")
const slides2=document.querySelectorAll(".slides>img");

const slideNav=document.querySelector(".slide-nav");
slides2.forEach(function(slide,index){
 let circle=  document.createElement("button");
circle.className="circle";
slideNav.appendChild(circle);
circle.setAttribute("data-index",index);

})
const circles=document.querySelectorAll(".circle");
// console.log(slides2);
slides.setAttribute("data-position",0);
let current=0;
selectCircle()
// let slideCount=slides2.length;
let lastIndex=slides2.length-1;
// console.log(slideCount)
// slides.style.transform=`translateX(${-1*(480)}px)`
document.querySelector(".btn-prev").addEventListener("click",function(){
    // console.log(slides.style.transform);
prevSlide();
})

document.querySelector(".btn-next").addEventListener("click",function(){
nextSlide();
    })
