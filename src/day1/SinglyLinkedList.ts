interface Node<T> {
    val: T;
    next?: Node<T>;
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const head: Node<T> = { val: item, next: this.head };
        this.head = head;
        this.length++;

        if (this.length === 1) {
            this.tail = head;
        }
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        let curr = this.head;
        let prev = undefined;

        while (curr) {
            prev = curr;
            curr = curr.next;
        }

        if (prev) {
            prev.next = { val: item };
            this.tail = prev.next;
        } else if (this.head) {
            this.head.next = { val: item };
            this.tail = this.head.next;
        } else {
            this.head = { val: item };
            this.tail = this.head;
        }

        this.length++;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = undefined;
        while (curr && curr?.val !== item) {
            prev = curr;
            curr = curr?.next;
        }

        if (prev) {
            prev.next = curr?.next;
            this.length--;
            return curr?.val;
        } else {
            const deleted = this.head;
            this.head = this.head?.next;

            if (this.length > 0) {
                this.length--;
            }

            return deleted?.val;
        }
    }
    get(idx: number): T | undefined {
        // if closer to end could use tail
        let curr = this.head;

        for (let i = 0; i < idx; ++i) {
            curr = curr?.next;
        }

        return curr?.val;
    }
    removeAt(idx: number): T | undefined {
        let curr = this.head;
        let prev = undefined;
        for (let i = 0; i < idx; ++i) {
            prev = curr;
            curr = curr?.next;
        }

        if (prev) {
            prev.next = curr?.next;
            this.length--;
            return curr?.val;
        } else {
            const deleted = this.head;
            this.head = this.head?.next;

            if (this.length > 0) {
                this.length--;
            }

            return deleted?.val;
        }
    }
}
