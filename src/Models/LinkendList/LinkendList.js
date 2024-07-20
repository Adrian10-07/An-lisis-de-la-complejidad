import list from '../../Controllers/Dependencias.js';
import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    push(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return null;
    }

    size() {
        return this.count;
    }

    isEmpty () {
        return this.size() === 0
    }

    bubbleSortL() {
        if (this.head === null) return;

        let n = this.size();
        let iterations = 0;
        let start = Date.now();

        for (let i = 0; i < n - 1; i++) {
            let current = this.head;
            let swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
                iterations++;
                if (current.next !== null && current.data.review_count > current.next.data.review_count) {
                    // Intercambiar datos
                    let temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }

            // Si no se realizaron intercambios, la lista ya está ordenada
            if (!swapped) break;
        }

        let end = Date.now();
        let time = (end - start) / 1000;
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + time + ' segundos');
        console.log('Número de iteraciones: ' + iterations);
        console.log('Lista ordenada: ', list)
    }
    //AQUI IRIA EL MERGE
    
    }






export default LinkedList;