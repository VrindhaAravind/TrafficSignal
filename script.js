function stop() {
    document.getElementById("red").style.background = "red";
    document.getElementById("yellow").style.background = "darkgrey";
    document.getElementById("green").style.background = "darkgrey";
}
function wait() {
    document.getElementById("yellow").style.background = "orange";
    document.getElementById("red").style.background = "darkgrey";
    document.getElementById("green").style.background = "darkgrey";
}
function go() {
    document.getElementById("green").style.background = "green";
    document.getElementById("red").style.background = "darkgrey";
    document.getElementById("yellow").style.background = "darkgrey";
}
function reset() {
    document.getElementById("green").style.background = "darkgrey";
    document.getElementById("red").style.background = "darkgrey";
    document.getElementById("yellow").style.background = "darkgrey";
}


var abort=false;

function clock() {
    if (abort){
        setInterval(lights,3000);
        
    }
    else{
        setTimeout(() => {
            reset()
        }, 0)
        setTimeout(() => {
            wait()
        }, 1500)
    }
    
}
setInterval(clock, 3000);

function lights(){
    setTimeout(() => {
        stop()
    }, 0)
    setTimeout(() => {
        wait()
    }, 1000)
    setTimeout(() => {
        go()
    }, 2000)
}

// function lights(num) {
//     var cancel;
//     if (num == 0) {
//         cancel = setInterval(function () {
//             setTimeout(() => {
//                 stop()
//             }, 0)
//             setTimeout(() => {
//                 wait()
//             }, 1500)
//             setTimeout(() => {
//                 go()
//             }, 3000) 
//     } ,4500);
// }  
//     if (num==1) {
//         clearInterval(cancel);

// }}
