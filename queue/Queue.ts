class Queue<T> {
  private items: T[];
  private length: number;
  private first: T | null;
  private last: T | null;

  constructor() {
    this.items = [];
    this.first = null;
    this.last = null;
    this.length = this.size;
  }

  get size(): number {
    return this.items.length;
  };

  enqueue(value: T): void {
    this.items = [value, ...this.items];
    this.last = value;
    this.length = this.size;

    if (this.size === 1) {
      this.first = this.last;
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const result: T = this.items.pop();

    this.first = this.items[this.size - 1] || null;
    this.length = this.size;

    if (this.isEmpty()) {
      this.last = null;
    }

    return result;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

export {
  Queue,
};
