var buttonElement = document.querySelector("button");
var counterElement = document.querySelector(".counter");

var counter = 0;

// Incrementar páginas
function count() {
    counter++;
    counterElement.textContent = counter.toString();
}

buttonElement.onclick = count;

// Timer
var start = new Date().getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var milisecondsPassed = now - start;
    var t = 3602000 - milisecondsPassed;
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("hour").innerHTML = hours;
    if (hours == 0) {
        document.getElementById("hour").textContent ='00';
    } else if (hours < 10) {
        document.getElementById("hour").textContent ='0' + hours;
    }
    document.getElementById("minute").innerHTML = minutes;  
    if (minutes == 0) {
        document.getElementById("minute").textContent ='00';
    } else if (minutes < 10) {
        document.getElementById("minute").textContent ='0' + minutes;
    }
    document.getElementById("second").innerHTML = seconds;
    if (seconds == 0) {
        document.getElementById("second").textContent ='00';
    } else if (seconds < 10) {
        document.getElementById("second").textContent ='0' + seconds;
    }
    if (t < 0) { 
            clearInterval(x);
            alert("Acabou o Tempo");
            document.getElementById("hour").textContent ='00'; 
            document.getElementById("minute").textContent ='00';  
            document.getElementById("second").textContent = '00'; } 
}, 1000); 

server.listen(3000);
