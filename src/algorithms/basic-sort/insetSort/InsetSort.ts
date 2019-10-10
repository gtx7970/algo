function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

export function insertSort<T>(list: T[]) {
    const arr = [...list];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            } else {
                break;
            }
        }
    }
    return arr;
}

// import { generateRandomArray } from '../../../utils/SortTestHelper';
// const testArr = generateRandomArray(10, 0, 50);
// const res2 = insertSort(testArr);
// console.log(res2);

function insertSort2<T>(list: T[]) {
    const arr = [...list];
    for (let i = 1; i < arr.length; i++) {
        const e = arr[i];
        let j;
        for (j = i; j > 0; j--) {
            if (arr[j - 1] > e) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
        }
        arr[j] = e;
    }
    return arr;
}
// console.log(insertSort2(testArr));
