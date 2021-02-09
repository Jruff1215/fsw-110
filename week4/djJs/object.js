var logo = document.createElement("h1");
logo.textContent = "Dj Js";
document.body.append(logo);
logo.classList.add("logo1");

var square = document.createElement("canvas");
square.style.backgroundColor = "black"
document.body.append(square);
square.classList.add("square1");

function handleSquareHover() {
    square.style.backgroundColor = "blue"
}
square.addEventListener('mouseover', handleSquareHover);

function handleMouseDown() {
    square.style.backgroundColor = "red"
}
square.addEventListener("mousedown", handleMouseDown);

function handleMouseUp() {
    square.style.backgroundColor = "yellow"
}
square.addEventListener("mouseup", handleMouseUp);

function handleDblClick() {
    square.style.backgroundColor = "green"
}
square.addEventListener("dblclick", handleDblClick);

function handleMouseScroll() {
    square.style.backgroundColor = "orange"
}
window.addEventListener("wheel", handleMouseScroll);

document.addEventListener("keypress", function(event) {
    if (event.key === "r" ) {
        return square.style.backgroundColor = "red";
    }
    else if (event.key === "g") {
        return square.style.backgroundColor = "green"
    }
    else if (event.key === "y") {
        return square.style.backgroundColor = "yellow"
    }
    else if (event.key === "b") {
        return square.style.backgroundColor = "blue"
    }
    else if (event.key === "o") {
        return square.style.backgroundColor = "orange"
    }
})