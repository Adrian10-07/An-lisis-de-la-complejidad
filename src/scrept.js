document.getElementById('showChartButton').addEventListener('click', function() {
    // Obtener los tiempos del almacenamiento local
    let linkedListTime = localStorage.getItem('linkedListTime');
    let arrayTime = localStorage.getItem('arrayTime');
    let timeSearchList = localStorage.getItem('timeSearchList');
    let timeSearchArray = localStorage.getItem('timeSearchArray');

    // Asegurarse de que los tiempos no sean nulos
    if (linkedListTime === null) linkedListTime = 0;
    if (arrayTime === null) arrayTime = 0;
    if (timeSearchList === null) timeSearchList = 0;
    if (timeSearchArray === null) timeSearchArray = 0;

    // Actualizar la tabla con los tiempos
    document.getElementById('linkedListTime').innerText = linkedListTime;
    document.getElementById('arrayTime').innerText = arrayTime;
    document.getElementById('timeSearchList').innerText = timeSearchList;
    document.getElementById('timeSearchArray').innerText = timeSearchArray;

    // Configurar la gráfica de barras
    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tiempo de carga (segundos)',
            data: [linkedListTime, arrayTime, timeSearchList, timeSearchArray]
        }],
        xaxis: {
            categories: ['Linked List', 'Array', 'Linked List Search', 'Array Search']
        }
    };

    // Renderizar la gráfica
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Mostrar el contenedor de la gráfica y la tabla
    document.getElementById('chart').style.display = 'block';
    document.getElementById('timeTable').style.display = 'table';
});


document.getElementById('showArraySort').addEventListener('click', function() {
    // Obtener los tiempos y las iteraciones del almacenamiento local
    let bubbleSortTime = localStorage.getItem('Bubbletime');
    let mergeSortTime = localStorage.getItem('Mergetime');
    let radixSortTime = localStorage.getItem('Radiixtime');

    let bubbleSortIterations = localStorage.getItem('BubbleIterations');
    let mergeSortIterations = localStorage.getItem('MergeIterations');
    let radixSortIterations = localStorage.getItem('RadixIterations');

    // Asegurarse de que los valores no sean nulos
    if (bubbleSortTime === null) bubbleSortTime = 0;
    if (mergeSortTime === null) mergeSortTime = 0;
    if (radixSortTime === null) radixSortTime = 0;

    if (bubbleSortIterations === null) bubbleSortIterations = 0;
    if (mergeSortIterations === null) mergeSortIterations = 0;
    if (radixSortIterations === null) radixSortIterations = 0;

    // Actualizar la tabla con los tiempos y las iteraciones
    document.getElementById('bubbleSortTime').innerText = bubbleSortTime;
    document.getElementById('mergeSortTime').innerText = mergeSortTime;
    document.getElementById('radixSortTime').innerText = radixSortTime;

    document.getElementById('bubbleSortIterations').innerText = bubbleSortIterations;
    document.getElementById('mergeSortIterations').innerText = mergeSortIterations;
    document.getElementById('radixSortIterations').innerText = radixSortIterations;

    // Configurar la gráfica de barras
    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tiempo de Ordenamiento (segundos)',
            data: [bubbleSortTime, mergeSortTime, radixSortTime]
        }],
        xaxis: {
            categories: ['Bubble Sort', 'Merge Sort', 'Radix Sort']
        }
    };

    // Renderizar la gráfica
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    // Mostrar el contenedor de la gráfica y la tabla
    document.getElementById('chart2').style.display = 'block';
    document.getElementById('timetableArraySort').style.display = 'table';
});
