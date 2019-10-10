function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function selectSort<T>(list: T[]): T[] {
    const arr = [...list];
    for (let i = 0; i < arr.length; i++) {
        let minindex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minindex = j;
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

import { generateRandomArray } from '../../../utils/SortTestHelper';
console.time('123');
const res = selectSort([23, 45, 12, 43, 25, 4]);
const res1 = selectSort(['A', 'B', 'G']);
const testArr = generateRandomArray(10, 0, 50);
const res2 = selectSort(testArr);
console.log(res);
console.log(res1);
console.log(res2);

console.timeEnd(('123'));

