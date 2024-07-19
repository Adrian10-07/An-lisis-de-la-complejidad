const array = [6, 3, 2, 7, 10, 9];

console.log(array);

function bubbleSort(array) {
  let aux = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }

  return array;
}

console.log(bubbleSort(array));
