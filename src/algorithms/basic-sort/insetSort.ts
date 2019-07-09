function swap<T>(list: T[], i: number, j: number): void {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function insertSort<T>(list: T[]) {
    let arr = [...list];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j-1)
            } else {
                break;
            }
        }
    }
    return arr
}

import { generateRandomArray } from '../../utils/SortTestHelper';
let testArr = generateRandomArray(10, 0, 50);
let res2 = insertSort(testArr);
console.log(res2);
