
function changeClass(element){
    element.classList.toggle("icon-touch:hover");
}

const myTimeout = setTimeout(Greeting, 1000);

function Greeting() {
    document.getElementById("hello").style.marginLeft = "22em";
}

