var cbtn = document.getElementById("colorchange");
cbtn.addEventListener("click", changeColors);

function changeColors() {
    var pageBody = document.querySelector(".body");
    pageBody.style.backgroundColor = pageBody.style.backgroundColor === "#bd40bd" ? "#fff5c0" : "#bd40bd";

    pageBody.style.color = pageBody.style.color === "#fff5c0" ? "#bd40bd" : "#fff5c0";
}
