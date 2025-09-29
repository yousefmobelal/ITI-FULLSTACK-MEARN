console.log(this)//window
document.getElementById('btn').onclick = function(){
    var counter = 0
    timerID = setInterval(function(){
        counter++
        document.getElementById('p1').innerHTML += counter+","
    },1000)
}

document.getElementById('btn2').onclick = function(){
    clearInterval(timerID)
}

// Worker
var myworker = new Worker('newThreadScript.js')

document.getElementById('btn3').onclick = function(){
    var num1 = document.getElementById('txt1').value
    var num2 = document.getElementById('txt2').value
    myworker.postMessage([num1,num2])
}

myworker.onmessage=function(event){
    console.log(event)
    document.getElementById('dv1').innerHTML = event.data[0]
}