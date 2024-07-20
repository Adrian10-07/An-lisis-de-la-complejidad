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
                    let temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }

            if (!swapped) break;
        }

        let end = Date.now();
        let time = (end - start) / 1000;
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + time + ' segundos');
        console.log('Número de iteraciones: ' + iterations);
        console.log('Lista ordenada: ', list)
    }

    mergeSortL() {
        if (this.head === null || this.head.next === null) {
            return;
        }

        let start = Date.now();
        this.iterations = 0;
        this.head = this.mergeSort(this.head);  
        let end = Date.now();
        let time = (end - start) / 1000;
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + time + ' segundos');
        console.log('Número de iteraciones: ' + this.iterations);  
    }

    mergeSort(head) {
        if (!head || !head.next) {
            return head;
        }

        let middle = this.getMiddle(head);
        let nextToMiddle = middle.next;
        middle.next = null;

        let left = this.mergeSort(head);
        let right = this.mergeSort(nextToMiddle);

        return this.merge(left, right);  
    }

    getMiddle(head) {
        if (!head) return head;

        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    merge(left, right) {
        if (!left) return right;
        if (!right) return left;

        let result;
        if (left.data.review_count <= right.data.review_count) {
            result = left;
            result.next = this.merge(left.next, right);
        } else {
            result = right;
            result.next = this.merge(left, right.next);
        }

        this.iterations++;  
        return result;
    }
    radixSortL() {
        if (this.head === null) return;

        let start = Date.now();
        this.iterations = 0;

        const getMaxDigits = (node) => {
            let max = 0;
            while (node) {
                const digitCount = Math.floor(Math.log10(Math.abs(node.data.review_count))) + 1;
                max = Math.max(max, digitCount);
                node = node.next;
            }
            return max;
        };

        const getDigit = (num, place) => {
            return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
        };

        const maxDigits = getMaxDigits(this.head);

        for (let i = 0; i < maxDigits; i++) {
            const digitBuckets = Array.from({ length: 10 }, () => new LinkedList());

            let current = this.head;
            while (current) {
                const digit = getDigit(current.data.review_count, i);
                digitBuckets[digit].push(current.data);
                current = current.next;
                this.iterations++;
            }

            this.head = null;
            this.count = 0;

            for (let j = 0; j < digitBuckets.length; j++) {
                let bucketNode = digitBuckets[j].head;
                while (bucketNode) {
                    this.push(bucketNode.data);
                    bucketNode = bucketNode.next;
                }
            }
        }

        let end = Date.now();
        let time = (end - start) / 1000;
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + time + ' segundos');
        console.log('Número de iteraciones: ' + this.iterations);
        console.log('Lista ordenada ', list)
    }
}


export default LinkedList;