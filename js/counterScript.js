let counters =document.querySelectorAll('.statisticsItem span:first-of-type');
/* console.log(counters);*/ //extract span elements as node list looks like array
let counterSpeed=1000; // the lower the value the faster the counter
let statisticsClick = document.getElementById('statisticsClick');
statisticsClick.addEventListener('click',updateCounter);//when we click on the nav bar element we go to statistics section and count

let statistics = document.getElementById('statistics');

window.addEventListener('scroll',updateCounetrThrowScroll)

function updateCounetrThrowScroll(){
let statisticsTopPos = statistics.getBoundingClientRect().top;//350
let statisticsBottomPos = statistics.getBoundingClientRect().bottom;//160
/* The Element.getBoundingClientRect() :
    method returns the size of an element and its position relative to the viewport
    the returned positions : left, top, right, bottom */
//console.log(statisticsTopPos);//statistics section top from viewport position
//console.log(statisticsBottomPos);//statistics section bottom from viewport position
 if(statisticsTopPos <= 350 && statisticsBottomPos >= 160){
    updateCounter()
} 
}

function updateCounter(){
    for(i=0 ;i<counters.length;i++){
        //console.log(typeof(counters[2].dataset.target));//return string
        //console.log(typeof(counters[2].innerText)); //return string 
        let counterTarget = +counters[i].dataset.target;//we need number not string
        //get a data attribute through the dataset object
        //we can use .getAttribute('data-target') instead
        let counterValue = +counters[i].innerText;//we need number not string
       // console.log(typeof(counterTarget));//return number
       // console.log(typeof(counterValue)); //return number
        //console.log(counters[i].innerText);
        //console.log(counters[i].dataset.target); 
        let incrementValue = counterTarget / counterSpeed;
        // console.log(incrementValue);
        if(counterTarget>counterValue){
            counters[i].innerText=Math.ceil( counterValue+incrementValue);//used Math.ceil to make the number intger
            setTimeout(updateCounter,50);//repeat updateCounter function after 50 milsecond  
        }else{
            counters[i].innerText=counterTarget;
        }
}  
}


/* counters.forEach(counterItem=>{
 function updateCounter(){
    let counterTarget = +counterItem.dataset.target;
    let counterValue = +counterItem.innerText;  

    let incrementValue = counterTarget / counterSpeed;
    console.log(counterValue);
    if(counterTarget>counterValue){
        counterItem.innerText= Math.ceil( counterValue+incrementValue);
        setTimeout(updateCounter,20);
    }else{
        counterItem.innerText=counterTarget;
    }
}
 updateCounter();
}) */
