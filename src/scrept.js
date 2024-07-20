document.getElementById('showArraySort').addEventListener('click', function() {
    // Obtener los tiempos y las iteraciones del almacenamiento local
    let bubbleSortTime = localStorage.getItem('Bubbletime');
    let mergeSortTime = localStorage.getItem('Mergetime');
    let radixSortTime = localStorage.getItem('RadixTime');

    let bubbleSortIterations = localStorage.getItem('BubbleIterations');
    let mergeSortIterations = localStorage.getItem('MergeIterations');
    let radixSortIterations = localStorage.getItem('RadixIterations');

    // Obtener los tiempos y las iteraciones de la lista enlazada
    let linkedListBubbleSortTime = localStorage.getItem('LinkedListBubbletime');
    let linkedListMergeSortTime = localStorage.getItem('LinkedListMergetime');
    let linkedListRadixSortTime = localStorage.getItem('LinkedListRadixTime');

    let linkedListBubbleSortIterations = localStorage.getItem('LinkedListBubbleIterations');
    let linkedListMergeSortIterations = localStorage.getItem('LinkedListMergeIterations');
    let linkedListRadixSortIterations = localStorage.getItem('LinkedListRadixIterations');

    // Asegurarse de que los valores no sean nulos
    if (bubbleSortTime === null) bubbleSortTime = 0;
    if (mergeSortTime === null) mergeSortTime = 0;
    if (radixSortTime === null) radixSortTime = 0;

    if (bubbleSortIterations === null) bubbleSortIterations = 0;
    if (mergeSortIterations === null) mergeSortIterations = 0;
    if (radixSortIterations === null) radixSortIterations = 0;

    if (linkedListBubbleSortTime === null) linkedListBubbleSortTime = 0;
    if (linkedListMergeSortTime === null) linkedListMergeSortTime = 0;
    if (linkedListRadixSortTime === null) linkedListRadixSortTime = 0;

    if (linkedListBubbleSortIterations === null) linkedListBubbleSortIterations = 0;
    if (linkedListMergeSortIterations === null) linkedListMergeSortIterations = 0;
    if (linkedListRadixSortIterations === null) linkedListRadixSortIterations = 0;

    // Actualizar la tabla con los tiempos y las iteraciones
    document.getElementById('bubbleSortTime').innerText = bubbleSortTime;
    document.getElementById('mergeSortTime').innerText = mergeSortTime;
    document.getElementById('radixSortTime').innerText = radixSortTime;

    document.getElementById('bubbleSortIterations').innerText = bubbleSortIterations;
    document.getElementById('mergeSortIterations').innerText = mergeSortIterations;
    document.getElementById('radixSortIterations').innerText = radixSortIterations;

    document.getElementById('linkedListBubbleSortTime').innerText = linkedListBubbleSortTime;
    document.getElementById('linkedListMergeSortTime').innerText = linkedListMergeSortTime;
    document.getElementById('linkedListRadixSortTime').innerText = linkedListRadixSortTime;

    document.getElementById('linkedListBubbleSortIterations').innerText = linkedListBubbleSortIterations;
    document.getElementById('linkedListMergeSortIterations').innerText = linkedListMergeSortIterations;
    document.getElementById('linkedListRadixSortIterations').innerText = linkedListRadixSortIterations;

    // Configurar la gráfica de barras
    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tiempo de Ordenamiento (segundos)',
            data: [
                bubbleSortTime,
                mergeSortTime,
                radixSortTime,
                linkedListBubbleSortTime,
                linkedListMergeSortTime,
                linkedListRadixSortTime
            ]
        }],
        xaxis: {
            categories: [
                'Bubble Sort',
                'Merge Sort',
                'Radix Sort',
                'LinkedList Bubble Sort',
                'LinkedList Merge Sort',
                'LinkedList Radix Sort'
            ]
        }
    };

    // Renderizar la gráfica
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    // Mostrar el contenedor de la gráfica y la tabla
    document.getElementById('chart2').style.display = 'block';
    document.getElementById('timetableArraySort').style.display = 'table';
});
