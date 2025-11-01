export function Sum(x,y){
    if(arguments.length !== 2){
        throw "you should enter 2 args only"
    }
    return x+y;
}
export function ConvertToArray(...param){
    return param
}

export let obj1 ={id:1},obj2 = {id:1}
export let obj3={x:[1,2,3],y:123}
// ,add = function(){
//     return obj3.y +=2
// }
// Object.defineProperty(obj3,"y",{
//     value:3,
//     enumerable:false
// })
// export let newObj = Object.freeze(obj3)
export let newObj = Object.seal(obj3)
export let set1 = new Set([1,2,3,3])

export class Calculator{
    constructor(){
        this.value = 0;
    }
    Increase(){
        ++this.value
    }
}

export function Shape(){}
Shape.Print = function(){}
Shape.prototype.Display = function(){}

export function fetchWithCallback(callback){
    setTimeout(()=>callback('data'),1000)
}
export async function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('data'),1000)
    })
}

export function CheckPositivity(x){
    // if(x>0) return true;
    // else {return false}
    return x>0
}