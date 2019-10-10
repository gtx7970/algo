
export function generateRandomArray(n: number, rangL: number, rangeR: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
        const min = Math.ceil(rangL);
        const max = Math.floor(rangeR);
        const res = Math.floor(Math.random() * (max - min + 1)) + min;
        arr[i] = res;
    }
    return arr;
}

export function isSorted<T>(list: T[]) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] > list[i + 1]) {
            return false;
        }
    }
    return true;
}

function generateNearlyRandomArray() {
    //
}
