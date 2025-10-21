class Singleton {
  static instanceCount = 0;
  static instance = null;

  constructor(data) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.data = data;

    Singleton.instanceCount++;
  }

  getData() {
    return this.data;
  }

  static getInstanceCount() {
    return Singleton.instanceCount;
  }
}

let s1 = new Singleton("data1");
console.log(s1.getData());
console.log("Instances:", Singleton.getInstanceCount());

let s2 = new Singleton("data2");
console.log(s2.getData());
console.log("Instances:", Singleton.getInstanceCount());

console.log(s1 === s2);
