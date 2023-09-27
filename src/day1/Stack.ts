type Node<T> = {
    val: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        } else {
            node.prev = this.head;
            this.head = node;
        }

        this.length++;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;
        this.head = this.head.prev;
        this.length--;
        return node.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
