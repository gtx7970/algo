function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function shellSort<T>(list: T[]): T[] {
    const arr = [...list];
    const n = arr.length;
    let h = 1;
    while (h < Math.floor(n / 3)) {
        h = 3 * h + 1;
    }
    while (h >= 1)  {
        for (let i = h; i < n; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                swap(arr, j, j - h);
            }
        }
        h = Math.floor(h / 3);
    }
    return arr;
}

function shellSort2<T>(list: T[]) {
    const arr = [...list];
    const n = arr.length;
    let h = 1;
    while (h < Math.floor(n / 3)) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < n; i++) {
            const e = arr[i];
            let j;
            for (j = i; j >= h && e < arr[j - h]; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = e;
        }
        h = Math.floor(h / 3);
    }
    return arr;
}

import { generateRandomArray } from '../../../utils/SortTestHelper';
const testArr = generateRandomArray(10, 0, 50);
const res = shellSort([2, 34, 1, 23, 56, 20]);
const res1 = shellSort(testArr);
const res2 = shellSort2(testArr);
// console.log(res);
// console.log(res1);
console.log(res2);
