const array = [6, 3, 2, 7, 10, 9];

console.log(array);

function getDigit(num, nth) {
  let ret = 0;
  while (nth--) {
    ret = num % 10;
    num = Math.floor((num - ret) / 10);
  }
  return ret;
}

function radixSort(list) {
  const max = Math.floor(Math.log10(Math.max.apply(Math, list)));
  let digitBuckets = [];
  let idx = 0;

  for (let i = 0; i < max + 1; i++) {
    digitBuckets = [];
    for (let j = 0; j < list.length; j++) {
      const digit = getDigit(list[j], i + 1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(list[j]);
    }

    idx = 0;
    for (let t = 0; t < digitBuckets.length; t++) {
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        for (j = 0; j < digitBuckets[t].length; j++) {
          list[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return list;
}

console.log(radixSort(array));
