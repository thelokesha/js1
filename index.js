
var btn = document.querySelector("button");
btn.addEventListener('click',function(){

    var change = Math.random();
    var change = change*1000000;
    var flip = Math.floor(change);
    var final ="#"+flip;
 document.querySelector("span").innerHTML=final;
document.getElementById("brocode").style.backgroundColor=final;

})

 





