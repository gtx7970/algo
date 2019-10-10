import MaxHeap from '../../../data-structure/priority-queue/MaxHeap';

function heapSort<T>(arr: T[]) {
    const maxheap = new MaxHeap();
    for (const item of arr) {
        maxheap.insert(item);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = maxheap.deleteMax() as T;
    }
}

import { generateRandomArray } from '../../../utils/SortTestHelper';
const testArr = generateRandomArray(10000000, -10000000, 100000000);
const testArr2 = [...testArr];
console.time('heapsort1');
heapSort(testArr);
console.timeEnd('heapsort1');
// console.log(testArr);

function heapSort2<T>(arr: T[]) {
    const maxheap = new MaxHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = maxheap.deleteMax() as T;
    }
}

console.time('heapsort2');
heapSort(testArr2);
console.timeEnd('heapsort2');
// console.log(testArr2);
// heapify
