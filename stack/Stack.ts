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
    this.length = this.size;

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
    this.first = this.items[0] || null;
    this.length = this.size;

    if (this.isEmpty()) {
      this.last = null;
    }

    return oldFirst;
  }
}

export {
  Stack,
};
