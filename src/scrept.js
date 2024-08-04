document.getElementById('showArraySort').addEventListener('click', function() {
    // Obtener los tiempos y las iteraciones del almacenamiento local
    let bubbleSortTime = localStorage.getItem('Bubbletime');
    let mergeSortTime = localStorage.getItem('Mergetime');
    let radixSortTime = localStorage.getItem('RadixTime');

    let bubbleSortTimeList = localStorage.getItem('BubbleTimeList');
    let mergeSortTimeList = localStorage.getItem('MergetimeList');
    let radixSortTimeList = localStorage.getItem('RadixTimeList');





    // Obtener los tiempos y las iteraciones de la lista enlazada


    // Asegurarse de que los valores no sean nulos
    if (bubbleSortTime === null) bubbleSortTime = 0;
    if (mergeSortTime === null) mergeSortTime = 0;
    if (radixSortTime === null) radixSortTime = 0;

    if (bubbleSortTimeList === null) bubbleSortTimeList = 0;
    if (mergeSortTimeList === null) mergeSortTimeList = 0;
    if (radixSortTimeList === null) radixSortTimeList = 0;




    // Actualizar la tabla con los tiempos y las iteraciones
    document.getElementById('bubbleSortTime').innerText = bubbleSortTime;
    document.getElementById('mergeSortTime').innerText = mergeSortTime;
    document.getElementById('radixSortTime').innerText = radixSortTime;

    document.getElementById('bubbleSortTimeList').innerText = bubbleSortTimeList;
    document.getElementById('mergeSortTimeList').innerText = mergeSortTimeList;
    document.getElementById('radixSortTimeList').innerText = radixSortTimeList;




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
                bubbleSortTimeList,
                mergeSortTimeList,
                radixSortTimeList,

            ]
        }],
        xaxis: {
            categories: [
                'Bubble Sort',
                'Merge Sort',
                'Radix Sort',
                'LinkedList Bubble Sort',
                'LinkedList Merge Sort',
                'LinkedList Radix Sort',
            ]
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    document.getElementById('chart2').style.display = 'block';
    document.getElementById('timetableArraySort').style.display = 'table';
});


document.getElementById('showChartButton').addEventListener('click', function() {

    let linkedListTimeInsert = localStorage.getItem('linkedListTime');
    let arrayTimeInsert = localStorage.getItem('arrayTime');
    let timeSearchArray1 = localStorage.getItem('timeSearchArray');
    let timeSearchList1 = localStorage.getItem('timeSearchList');



    if (linkedListTimeInsert === null) linkedListTimeInsert = 0;
    if (arrayTimeInsert === null) arrayTimeInsert = 0;
    if (timeSearchArray1 === null) timeSearchArray1 = 0;
    if (timeSearchList1 === null) timeSearchList1 = 0;






    document.getElementById('linkedListTimeInsert').innerText = linkedListTimeInsert;
    document.getElementById('arrayTimeInsert').innerText = arrayTimeInsert;
    document.getElementById('timeSearchArray1').innerText = timeSearchArray1;
    document.getElementById('timeSearchList1').innerText = timeSearchList1;




    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Tiempo de Ordenamiento (segundos)',
            data: [
                linkedListTimeInsert,
                arrayTimeInsert,
                timeSearchArray1,
                timeSearchList1
            ]
        }],
        xaxis: {
            categories: [
                'linkedListTimeInsert',
                'arrayTimeInsert',
                'timeSearchArray1',
                'timeSearchList1'
            ]
        }
        
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    document.getElementById('chart').style.display = 'block';
    document.getElementById('timeTable').style.display = 'table';
});

document.getElementById('showIterations').addEventListener('click', function() {


    let bubbleSortIterations = localStorage.getItem('BubbleIterations');
    let mergeSortIterations = localStorage.getItem('MergeIterations');
    let radixSortIterations = localStorage.getItem('RadixIterations');

    let bubbleSortIterationsL = localStorage.getItem('BubbleiterationsList');
    let mergeSortIterationsL = localStorage.getItem('IterationsMergeList');
    let radixSortIterationsL = localStorage.getItem('IterationsRadixList');


    if (bubbleSortIterations === null) bubbleSortIterations = 0;
    if (mergeSortIterations === null) mergeSortIterations = 0;
    if (radixSortIterations === null) radixSortIterations = 0;

    if (bubbleSortIterationsL === null) bubbleSortIterationsL = 0;
    if (mergeSortIterationsL === null) mergeSortIterationsL = 0;
    if (radixSortIterationsL === null) radixSortIterationsL = 0;

    document.getElementById('bubbleSortIterations').innerText = bubbleSortIterations;
    document.getElementById('mergeSortIterations').innerText = mergeSortIterations;
    document.getElementById('radixSortIterations').innerText = radixSortIterations;
    
    document.getElementById('bubbleSortIterationsL').innerText = bubbleSortIterationsL;
    document.getElementById('mergeSortIterationsL').innerText = mergeSortIterationsL;
    document.getElementById('radixSortIterationsL').innerText = radixSortIterationsL;






    var options = {
        chart: {
            type: 'bar'
        },
        series: [{
            name: 'Iteraciones Por Algortimo',
            data: [
                bubbleSortIterations,
                mergeSortIterations,
                radixSortIterations,

                bubbleSortIterationsL,
                mergeSortIterationsL,
                radixSortIterationsL
            ]
        }],
        xaxis: {
            categories: [
                'N.Interaciones Bubble Sort',
                'N.Interaciones Merge Sort',
                'N.Interaciones Radix Sort',

                'N.Interaciones Bubble Sort linked List',
                'N.Interaciones Merge Sort linked List',
                'N.Interaciones Radix Sort linked List'
            ]
        }
        
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();

    document.getElementById('chart3').style.display = 'block';
    document.getElementById('IterarionsTable').style.display = 'table';
});