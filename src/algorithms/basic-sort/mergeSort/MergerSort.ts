function mergeSort(a: number[], l: number, r: number) {
    if (r <= l) {
        return;
    }
    const mid = Math.floor((l + r) / 2);
    mergeSort(a, l, mid);
    mergeSort(a, mid + 1, r);
    merge(a, l, mid, r);
}

function merge(a: number[], l: number, mid: number, r: number) {
    let i = l;
    let j = mid + 1;
    const aux: number[] = [];
    for (let k = l; k < r + 1; k++) {
        aux[k] = a[k];
    }
    for (let k = i; k < r + 1; k++) {
        if (aux[i] > aux[j]) {
            a[k] = aux[j++];
        } else if (i > mid) {
            a[k] = aux[j++];
        } else if (j > r) {
            a[k] = aux[i++];
        } else {
            a[k] = aux[i++];
        }
    }
    return a;
}

function mergerBu(a: number[]) {
    const n = a.length;
    for (let sz = 1; sz < n; sz = sz + sz) {
        for (let i = 0; i < n - sz; i += sz + sz) {
            merge(a, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
        }
    }
}

import { generateRandomArray } from '../../../utils/SortTestHelper';
const testArr = generateRandomArray(20, 0, 50);
const testArr1 = generateRandomArray(20, 0, 50);
mergeSort(testArr, 0, testArr.length - 1);
mergerBu(testArr1);

