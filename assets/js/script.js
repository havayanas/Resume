var cbtn = document.getElementById("colorchange");
cbtn.addEventListener("click", changeColors);

function changeColors() {
    var pageBody = document.querySelector(".body");
    
    var bgC1 = "rgb(189, 64, 189)";
    var bgC2 = "rgb(255, 245, 192)";
    var text1 = "rgb(255, 245, 192)";
    var text2 = "rgb(189, 64, 189)";

    pageBody.style.backgroundColor = 
        pageBody.style.backgroundColor === bgC1 ? bgC2 : bgC1;

    pageBody.style.color = 
        pageBody.style.color === text1 ? text2 : text1;
}