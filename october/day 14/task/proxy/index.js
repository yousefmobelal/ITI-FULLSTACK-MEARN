class CountriesProxy {
  constructor() {
    this.cache = null;
  }

  getCountries() {
    if (this.cache) {
      return this.cache;
    }
    this.cache = ["Egypt", "USA", "France", "Japan"];
    return this.cache;
  }
}

const proxy = new CountriesProxy();

console.log(proxy.getCountries());
console.log(proxy.getCountries());
