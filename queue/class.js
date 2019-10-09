class Queue {
  constructor() {
    this.items = [];
  }

  get length() {
    return this.items.length;
  };

  enqueue(item) {
    this.items.unshift(item);
  }

  dequeue() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const Q = new Queue();

console.log(Q.isEmpty()); // true

Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);

console.log(Q.isEmpty()); // false
console.log(Q.peek()); // 1

Q.dequeue();
console.log(Q.peek()); // 2

Q.dequeue();
console.log(Q.peek()); // 3

Q.dequeue();
console.log(Q.peek()); // undefined

Q.dequeue();
console.log(Q.peek()); // undefined

console.log(Q.isEmpty()); // true
