class Stack<T> {
  private items: T[];
  private length: number;
  private first: T | null;
  private last: T | null;

  constructor() {
    this.items = [];
    this.first = null;
    this.last = null;
    this.length = this.items.length;
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  push(value: T) {
    this.items = [value, ...this.items];
    this.first = value;

    if (this.size === 1) {
      this.last = this.first;
    }
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const [oldFirst, ...items]: T[] = this.items;

    this.items = items;

    return oldFirst;
  }
}

const stack: Stack<string | number> = new Stack();

console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);
stack.push('123');
stack.push('true');
stack.push('false');
stack.push('');

console.log(stack.isEmpty()); // false
console.log(stack.size); // 7
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
