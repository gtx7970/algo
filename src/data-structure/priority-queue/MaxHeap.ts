function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function half(num: number): number {
    return Math.floor(num / 2);
}

export default class MaxHeap<T> {
    public data: T[];
    public n: number;
    constructor(arr?: T[]) {
        this.data = [];
        this.n = 0;
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                this.data[i + 1] = arr[i];
            }
            this.n = arr.length;
            for (let i = half(this.n); i >= 0; i--) {
                this.shiftDown(i);
            }
        }

    }
    public insert(item: T): void {
        this.data[0] = item;
        this.data[++this.n] = item;
        this.shiftUp(this.n);
    }
    public deleteMax(): T {
        const max = this.data[1];
        swap(this.data, 1, this.n);
        this.data.splice(this.n, 1);
        this.n--;
        this.shiftDown(1);
        return max;
    }
    private shiftUp(k: number): void {
        while (k > 1 && this.data[k] > this.data[half(k)]) {
            swap(this.data, half(k), k);
            k = half(k);
        }
    }
    private shiftDown(k: number): void {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j + 1 <= this.n && this.data[j] < this.data[j + 1]) {
                j++;
            }
            if (this.data[k] >= this.data[j]) {
                break;
            }
            swap(this.data, k, j);
            k = j;
        }
    }
    // public headpify(arr: T[]) {
    //     //
    // }
 }

// const maxheap = new MaxHeap();
// maxheap.insert(10);
// maxheap.insert(19);
// maxheap.insert(32);
// maxheap.insert(13);
// maxheap.insert(43);
// console.log(maxheap.data);
// maxheap.deleteMax();
// console.log(maxheap.data);
