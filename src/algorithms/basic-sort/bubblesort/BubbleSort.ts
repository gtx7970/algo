function swap<T>(list: T[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function bubbleSort<T>(list: T[]) {
    const arr = [...list];
    // let swaped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
console.log(bubbleSort([45, 21, 34, 56, 98]));
