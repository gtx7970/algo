function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function _partition(arr: number[], l: number, r: number): number {
    const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    swap(arr, l, randomIndex);
    const target = arr[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] < target) {
            swap(arr, j + 1, i);
            j++;
        }
    }
    swap(arr, l, j);
    return j;
}

function quickSort(arr: number[], l: number, r: number): void {
    if (r <= l) {
        return;
    }
    const p = _partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
    // return arr;
}

function quickSort2(): void {}

function _partition2(): void {}
let testArr = [4, 6, 2, 3, 1, 5, 7, 8];
// let res = _partition(list1, 0, list1.length - 1);
// import { generateRandomArray } from '../../../utils/SortTestHelper';
// const testArr = generateRandomArray(10000, 0, 50);
quickSort(testArr, 0, testArr.length - 1);
console.log(testArr);
