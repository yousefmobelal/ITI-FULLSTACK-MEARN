class Singleton{
    constructor(data){
        if(Singleton.instance){
            return Singleton.instance
        }
        Singleton.instance = this;
        this.data = data;
    }
    getData(){
        return this.data;
    }
}
let s1 = new Singleton("data1");
console.log(s1.getData());
let s2 = new Singleton("data2");
console.log(s2.getData());
console.log(s1 === s2);