export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) return -1;

        const val = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return val;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return val;
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private heapifyDown(idx: number): void {
        const idxL = this.leftChild(idx);
        const idxR = this.rightChild(idx);

        if (idx >= this.length || idxL >= this.length) return;

        const val = this.data[idx];
        const left = this.data[idxL];
        const right = this.data[idxR];

        if (left > right && val > right) {
            this.data[idx] = right;
            this.data[idxR] = val;
            this.heapifyDown(idxR);
        } else if (right > left && val > left) {
            this.data[idx] = left;
            this.data[idxL] = val;
            this.heapifyDown(idxL);
        }
    }
    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.parent(idx);
        const v = this.data[idx];
        if (this.data[p] > v) {
            // swap
            const tmp = this.data[p];
            this.data[p] = v;
            this.data[idx] = tmp;
            this.heapifyUp(p);
        }
    }
}
