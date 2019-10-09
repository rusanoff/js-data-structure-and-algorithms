const createQueue = () => {
  const queue = [];

  return {
    get length() {
      return queue.length;
    },
    enqueue: (item) => { queue.unshift(item) },
    dequeue: () => queue.pop(),
    peek: () => queue[queue.length - 1],
    isEmpty: () => queue.length === 0,
  }
};

const Q = createQueue();

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
