console.log(this)

onmessage = function(event){
    console.log(event)
    var num1 = parseInt(event.data[0])
    var num2 = parseInt(event.data[1])
    var sum = num1 + num2
    this.postMessage([sum])
}