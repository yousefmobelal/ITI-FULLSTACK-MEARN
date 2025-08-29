var nums = [5, 4, 3, 2, 1];
radixSort(nums);
console.log(nums);

function radixSort(list) {
  var base = 10;
  var done = false;
  var place = 1;
  while (!done) {
    done = true;
    var buckets = Array.from({ length: 10 }, () => []);
    for (const number of list) {
      var remainingPart = Math.floor(number / place);
      var digit = remainingPart % base;
      buckets[digit].push(number);
      if (Math.floor(remainingPart / base) > 0) {
        done = false;
      }
    }
    place *= base;
    list.length = 0;
    list.push(...buckets.flat());
  }
}
