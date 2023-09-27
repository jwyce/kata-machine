interface Node<T> {
    val: T;
    next?: Node<T>;
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        if (this.tail && this.head) {
            this.tail.next = { val: item };
            this.tail = this.tail.next;
        } else {
            this.head = this.tail = { val: item };
        }

        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const item = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }
        return item.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
