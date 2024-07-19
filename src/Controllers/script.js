import list from "./Dependencias.js";

let btnInsert = document.getElementById('btnInsert');
let btnSearch = document.getElementById('btnSearch');
let array = [];

    btnInsert.addEventListener('click', ()=>{
        console.log('Haz hecho click');
        fetch("./bussines.json")
        .then(response => response.json())
        .then(data => {
            insLinked(data);
            insArray(data);
        });
    });

    function insLinked (data) {
        let start = Date.now();
        for (let i=0; i<=150345; i++) {
            list.push(data[i]);
        }
        console.log(list);
        let end = Date.now();
        let time = end - start;
        console.log('El tiempo de proceso en la Linked List fue: '+ (time/1000) + ' segundos.');
    }

    function insArray (data) {
        let start = Date.now();
        for (let i=0; i<=150345; i++) {
            array.push(data[i]);
        }
        console.log(array);
        let end = Date.now();
        let time = end - start;
        console.log('El tiempo de proceso en el Array fue: '+ (time/1000)+ ' segundos.');
    }


    btnSearch.addEventListener('click', ()=> {
        if (list.isEmpty() && array.length==0) {
            alert('Primero tiene que insertar los datos');
        } else {
            let obTyped = document.getElementById('obTyped').value;
            searchArray(obTyped);
            searchList(obTyped);
        }
    });

    const searchArray = (obTyped) => {
        console.log(obTyped + ' LINKED BUSQUEDA');
        let start = Date.now();
        for (let i=0; i<=150345; i++) {
            console.log(array[i].bussines);
            if (obTyped == array[i].bussines) {
                let end = Date.now();
                let time = end - start;        
                console.log('El tiempo de proceso en la Array fue: '+ (time/1000)+ ' segundos.');
                return true;
            }                
        }
        return false;
    }

    const searchList = (obTyped) => {
        console.log(obTyped + ' ARRAY BUSQUEDA')
        let start = Date.now();
        for (let i=0; i<=150345; i++) {
            console.log(list.getElementAt(i).data.bussines);
            if (obTyped == list.getElementAt(i).data.bussines) {
                let end = Date.now();
                let time = (end - start)/1000;        
                console.log('El tiempo de proceso en el Linked List fue: '+time+ ' segundos, buscando  '+obTyped);
                return true;
            }
        }
        return false;
    }

      

