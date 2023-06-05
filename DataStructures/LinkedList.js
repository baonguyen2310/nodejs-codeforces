class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add (data) {
        const node = new Node(data);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Please enter a valid index.");
            return;
        }
        else {
            let node = new Node(data);
            let curr, prev;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let i = 0;
                while (i < index) {
                    prev = curr;
                    curr = curr.next;
                    i++;
                }
                prev.next = node;
                node.next = curr;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log("Please enter a valid index");
            return;
        } else {
            let curr, prev;
            curr = this.head;
            if (index == 0) {
                this.head = curr.next;
            } else {
                let i = 0;
                while (i < index) {
                    prev = curr;
                    curr = curr.next;
                    i++;
                }
                prev.next = curr.next;
            }
            this.size--;
        }
    }

    remove(data) {
        let curr = this.head;
        let prev = null;
        let i = 0;
        while (curr) {
            if (curr.data == data) {
                if (prev == null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
            }
            prev = curr;
            curr = curr.next;
        }
    }

    indexOf(data) {
        let curr;
        curr = this.head;
        let index = 0;

        while(curr) {
            if (curr.data == data) {
                return index;
            }
            curr = curr.next;
            index++;
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    sizeOfList() {
        return this.size;
    }

    printList() {
        let curr = this.head;
        let str = '';
        while (curr) {
            str += curr.data + ' ';
            curr = curr.next;
        }
        console.log(str);
    }
}

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(29);
linkedList.add(55);
linkedList.insertAt(2, 2);
linkedList.removeFrom(0);
linkedList.remove(29);
linkedList.printList();
console.log(linkedList.indexOf(22));
console.log(linkedList.isEmpty());
console.log(linkedList.sizeOfList());