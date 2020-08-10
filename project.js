let num=document.querySelectorAll("#num");
let screen=document.getElementById("screen");
let sign=document.querySelectorAll("#sign");
let res=document.getElementById("equal");
let sqrt=document.getElementById("sqrt")
let clear=document.querySelectorAll("#clear");
let del=document.getElementById("del")
num.forEach(function(digit){
  digit.addEventListener("click",function(e){
    screen.value+=e.currentTarget.textContent;
    
  })
});
sign.forEach(function(sign){
  sign.addEventListener("click",function(e){
    screen.value+=e.currentTarget.textContent;
  })
});

res.addEventListener("click",function(){
  screen.value=eval(screen.value);
});
sqrt.addEventListener("click",function(){
  screen.value=Math.sqrt(eval(screen.value));
});
clear.forEach(function(clr){
  clr.addEventListener("click",function(){
    screen.value=""
  })
});
del.addEventListener("click",function(){
  screen.value=screen.value.slice(0,-1);
})