import list from '../../Controllers/Dependencias.js';
import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
        // Declaramos las variables para las iteraciones
        this.BubbleiterationsList = 0;
        this.IterationsMergeList = { count: 0 };
        this.IterationsRadixList = 0;
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

    isEmpty() {
        return this.size() === 0;
    }

    bubbleSortL() {
        if (this.head === null) return;

        let n = this.size();
        this.BubbleiterationsList = 0;  // Reiniciar contador de iteraciones
        let start = Date.now();

        for (let i = 0; i < n - 1; i++) {
            let current = this.head;
            let swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
                this.BubbleiterationsList++;
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
        let BubbleTimeList = (end - start) / 1000;
        localStorage.setItem('BubbleTimeList', BubbleTimeList);
        localStorage.setItem('BubbleiterationsList', this.BubbleiterationsList);
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + BubbleTimeList + ' segundos');
        console.log('Número de iteraciones: ' + this.BubbleiterationsList);
        console.log('Lista ordenada: ', list);
    }

    mergeSortL() {
        this.IterationsMergeList.count = 0;  // Reiniciar contador de iteraciones
        let start = Date.now();
        this.head = this.mergeSortIterative(this.head, this.IterationsMergeList);
        let end = Date.now();
        let MergetimeList = (end - start) / 1000;
        localStorage.setItem('MergetimeList', MergetimeList);
        localStorage.setItem('IterationsMergeList', this.IterationsMergeList.count);
        console.log('El tiempo de proceso en la Linked List fue de: ' + MergetimeList + ' segundos');
        console.log('Número de iteraciones: ' + this.IterationsMergeList.count);
        console.log('Lista ordenada: ', list);
    }

    mergeSortIterative(head, IterationsMergeList) {
        if (!head || !head.next) {
            return head;
        }

        let step = 1;
        let dummy = { next: head };

        while (true) {
            let current = dummy.next;
            let tail = dummy;
            let remaining = false;

            while (current) {
                let left = current;
                let right = this.split(left, step);
                current = this.split(right, step);

                if (right) remaining = true;

                let merged = this.mergeIterative(left, right, IterationsMergeList);
                tail.next = merged;

                while (tail.next) {
                    tail = tail.next;
                }
            }

            if (!remaining) break;
            step *= 2;
        }

        return dummy.next;
    }

    split(start, step) {
        if (!start) return null;

        let current = start;
        for (let i = 1; current.next && i < step; i++) {
            current = current.next;
        }

        let rest = current.next;
        current.next = null;
        return rest;
    }

    mergeIterative(left, right, IterationsMergeList) {
        let dummy = { next: null };
        let tail = dummy;

        while (left && right) {
            if (left.data.review_count <= right.data.review_count) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
            IterationsMergeList.count++;
        }

        tail.next = left || right;
        return dummy.next;
    }

    radixSortL() {
        if (this.head === null) return;

        let start = Date.now();
        this.IterationsRadixList = 0;  // Reiniciar contador de iteraciones

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
                this.IterationsRadixList++;
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
        let RadixTimeList = (end - start) / 1000;
        localStorage.setItem('RadixTimeList', RadixTimeList);
        localStorage.setItem('IterationsRadixList', this.IterationsRadixList);
        console.log('El tiempo de proceso en LINKED LIST fue de: ' + RadixTimeList + ' segundos');
        console.log('Número de iteraciones: ' + this.IterationsRadixList);
        console.log('Lista ordenada ', list);
    }
}

export default LinkedList;