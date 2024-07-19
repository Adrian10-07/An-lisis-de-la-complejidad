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
}



export default LinkedList;