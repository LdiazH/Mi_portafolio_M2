var btn = document.getElementById("btn__welcome");
var project = document.getElementById("second__body");

btn.addEventListener("click",function(){
    project.style.visibility = "visible";
    btn.style.display = "none";
})


document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
});

const submitForm = document.getElementById("submitBtn");
const form = document.getElementById("contactForm");
submitForm.addEventListener("click",function(){
    alert("Muchas gracias, recibirá una mensaje de vuelta a la brevedad.");
    form.style.display ="none";

});

const liItems = document.getElementById("lista");
liItems.addEventListener("mouseenter",function(){
    liItems.style.fontSize = "35px";
});
liItems.addEventListener("mouseleave",function(){
    liItems.style.fontSize = "initial";
});

const workCard1 = document.getElementById("card1");
const workCard2 = document.getElementById("card2");
const workCard3 = document.getElementById("card3")

workCard1.addEventListener("mouseenter",function(){
    workCard1.style.backgroundColor ="#143e7f";
    workCard1.style.color ="white";
});
workCard1.addEventListener("mouseleave",function(){
    workCard1.style.backgroundColor ="#00a5f6";
    workCard1.style.color = "initial";
});
workCard2.addEventListener("mouseenter",function(){
    workCard2.style.backgroundColor ="#143e7f";
    workCard2.style.color ="white";
});
workCard2.addEventListener("mouseleave",function(){
    workCard2.style.backgroundColor ="#00a5f6";
    workCard2.style.color = "initial";
});
workCard3.addEventListener("mouseenter",function(){
    workCard3.style.backgroundColor ="#143e7f";
    workCard3.style.color ="white";
});
workCard3.addEventListener("mouseleave",function(){
    workCard3.style.backgroundColor ="#00a5f6";
    workCard3.style.color = "initial";
});