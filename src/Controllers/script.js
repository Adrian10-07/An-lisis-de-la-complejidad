import list from "./Dependencias.js";

let btnInsert = document.getElementById('btnInsert');
let btnSearch = document.getElementById('btnSearch');
let array = [];

btnInsert.addEventListener('click', () => {
    console.log('Haz hecho click');
    fetch("./bussines.json")
        .then(response => response.json())
        .then(data => {
            insLinked(data);
            insArray(data);
        });
});

function insLinked(data) {
    let start = Date.now();
    for (let i = 0; i <= 150345; i++) {
        list.push(data[i]);
    }
    console.log(list);
    let end = Date.now();
    let linkedListTime = (end - start) / 1000;
    localStorage.setItem('linkedListTime', linkedListTime);
    console.log('El tiempo de proceso en la Linked List fue: ' + linkedListTime + ' segundos.');
}

function insArray(data) {
    let start = Date.now();
    for (let i = 0; i <= 150345; i++) {
        array.push(data[i]);
    }
    console.log(array);
    let end = Date.now();
    let arrayTime = (end - start) / 1000;
    localStorage.setItem('arrayTime', arrayTime);
    console.log('El tiempo de proceso en el Array fue: ' + arrayTime + ' segundos.');
}

btnSearch.addEventListener('click', () => {
    if (list.isEmpty() && array.length == 0) {
        alert('Primero tiene que insertar los datos');
    } else {
        let obTyped = document.getElementById('obTyped').value;
        searchArray(obTyped);
        searchList(obTyped);
    }
});

const searchArray = (obTyped) => {
    let start = Date.now();
    for (let i=0; i<=150345; i++) {
        if (obTyped == array[i].business) {
            let end = Date.now();
            let timeSearchArray = (end - start)/1000;
            localStorage.setItem('timeSearchArray', timeSearchArray);
            console.log('El tiempo de proceso en la Array fue de: '+timeSearchArray+ ' segundos, buscando: '+obTyped+' que se encuentra en la posición: '+[i]);
            return true;
        }                
    }
    return false;
}
const searchList = (obTyped) => {
    let start = Date.now();
    for (let i=0; i<=150345; i++) {
        if (obTyped == list.getElementAt(i).data.business) {
            let end = Date.now();
            let timeSearchList = (end - start)/1000;    
            localStorage.setItem('timeSearchList', timeSearchList);    
            console.log('El tiempo de proceso en la Linked List fue: '+timeSearchList+ ' segundos, buscando  '+obTyped+' que se encunetra en la posición: '+[i]);
            return true;
        }
    }
    return false;
}


let btnBubble = document.getElementById('btnBubble');
let btnMerge = document.getElementById('btnMerge');
let btnRadix = document.getElementById('btnRadix');

btnBubble.addEventListener('click', () => {
    if (list.isEmpty() && array.length == 0) {
        alert('Primero tiene que insertar los datos');
    } else {
        console.log('click');
        bubbleSortArray(array);
        list.bubbleSortL(); // Asume que tienes esta función definida para linked list
    }
});

const bubbleSortArray = (array) => {
    let n = array.length;
    let BubbleIterations = 0;

    let start = Date.now();
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            BubbleIterations++;
            if (array[j].review_count > array[j + 1].review_count) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    let end = Date.now();
    let Bubbletime = (end - start) / 1000;
    localStorage.setItem('Bubbletime', Bubbletime);
    localStorage.setItem('BubbleIterations', BubbleIterations);
    console.log('El tiempo de proceso en ARRAY fue de: ' + Bubbletime + ' segundos');
    console.log('Número de iteraciones: ' + BubbleIterations);
    console.log('Array ordenado:', array);

    return array;
};

btnMerge.addEventListener('click', () => {
    if (list.isEmpty() && array.length == 0) {
        alert('Primero tiene que insertar los datos');
    } else {
        console.log('click');
        mergeSortArray(array);
        list.mergeSortL(); // Asume que tienes esta función definida para linked list
    }
});

const mergeSortArray = (array) => {
    let iterations = 0;
    let start = Date.now(); // Inicia el temporizador

    const mergeSort = (array) => {
        let n = array.length;
        if (n < 2) return array;

        const mid = Math.floor(n / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);

        return merge(mergeSort(left), merge(mergeSort(right)));
    };

    const merge = (left, right) => {
        const result = [];

        while (left.length && right.length) {
            iterations++;
            if (left[0].review_count <= right[0].review_count) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length) {
            iterations++;
            result.push(left.shift());
        }

        while (right.length) {
            iterations++;
            result.push(right.shift());
        }

        return result;
    };

    const sortedArray = mergeSort(array);
    let end = Date.now();
    let time = (end - start) / 1000;

    localStorage.setItem('Mergetime', time);
    localStorage.setItem('MergeIterations', iterations);
    console.log('El tiempo de proceso en ARRAY fue de: ' + time + ' segundos');
    console.log('Número de iteraciones: ' + iterations);
    console.log('Array ordenado:', sortedArray);

    return sortedArray;
};


btnRadix.addEventListener('click', () => {
    if (list.isEmpty() && array.length == 0) {
        alert('Primero tiene que insertar los datos');
    } else {
        console.log('click');
        radixSortArray(array);
        list.radixSortL();
    }
});

const radixSortArray = (array) => {
    let iterations = 0;
    let start = Date.now();

    const getMax = (array) => {
        let max = array[0].review_count;
        for (let i = 1; i < array.length; i++) {
            if (array[i].review_count > max) {
                max = array[i].review_count;
            }
        }
        return max;
    };

    const countingSort = (array, exp) => {
        let n = array.length;
        let output = new Array(n);
        let count = new Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            let index = Math.floor(array[i].review_count / exp) % 10;
            count[index]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            let index = Math.floor(array[i].review_count / exp) % 10;
            output[count[index] - 1] = array[i];
            count[index]--;
            iterations++;
        }

        for (let i = 0; i < n; i++) {
            array[i] = output[i];
        }
    };

    const radixSort = (array) => {
        let max = getMax(array);

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(array, exp);
        }

        return array;
    };

    const sortedArray = radixSort(array);
    let end = Date.now();
    let time = (end - start) / 1000;

    localStorage.setItem('Radiixtime', time);
    localStorage.setItem('RadixIterations', iterations);
    console.log('El tiempo de proceso en ARRAY fue de: ' + time + ' segundos');
    console.log('Número de iteraciones: ' + iterations);
    console.log('Array ordenado:', sortedArray);

    return sortedArray;
};

