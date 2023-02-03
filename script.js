const arrowBtn = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");

/************ default not showiing answer*********** */
for (let i = 0;  i < answer.length; i++) {
    answer[i].classList.add("hidden")
}
   

/*********opens answer when clicked*********** */
for (let i = 0; i< arrowBtn.length; i++) {
    arrowBtn[i].addEventListener("click", function(){
        answer[i].classList.toggle("hidden");
    }) ;
}


