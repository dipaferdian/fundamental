class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.middleValue = 0;
    this.isNull = false;
  }

  // 1. Insert at the beginning (Prepend)
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // 2. Insert at the end (Append)
  insertLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  findMiddle() {
    let lambat = this.head;
    let cepat = this.head;

    while (cepat?.next) {
      cepat = cepat?.next?.next;
      lambat = lambat.next;
    }

    if (lambat == null && this.head) {
      lambat = this.head;
    }

    return lambat.value;
  }

  // 3. Remove at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
    // PERBAIKAN: ubah current.data menjadi current.value
    return current.value;
  }

  // 4. Print all list data
  printList() {
    let current = this.head;
    let output = "";
    while (current) {
      // PERBAIKAN: ubah current.data menjadi current.value
      output += `${current.value} -> `;
      current = current.next;
    }
    console.log(output + "null");
  }
}

const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);

console.log("middle", list.findMiddle());
