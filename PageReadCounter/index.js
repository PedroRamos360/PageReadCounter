var buttonElement = document.querySelector("button");
var counterElement = document.querySelector(".counter")
var counter = 0;

function count() {
    counter++;
    counterElement.after(counter.toString());
}

button.onclick = count;