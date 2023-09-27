export default function bubble_sort(arr: number[]): void {
    for (let k = arr.length - 1; k > 0; --k) {
        for (let i = 0; i < k; ++i) {
            if (arr[i] > arr[i + 1]) {
                // swap
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
            }
        }
    }
}
