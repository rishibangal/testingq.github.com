function ChangeColor()  
{  
     document.getElementById('btn1').style.backgroundColor='#828181';  
     setTimeout("ChangeColor2()",2000);  
}  
function ChangeColor2()  
{  
     document.getElementById('btn1').style.backgroundColor='#bababa';  
     setTimeout("ChangeColor3()",2000);  
}  
function ChangeColor3()  
{  
     document.getElementById('btn1').style.backgroundColor='Green';  
     setTimeout("ChangeColor4()",2000);  
}  
function ChangeColor4()  
{  
     document.getElementById('btn1').style.backgroundColor='Red';  
}  
window.addEventListener("load", function () {
     const loader = document.querySelector(".loader");
     loader.className += " hidden"; // class "loader hidden"
 });