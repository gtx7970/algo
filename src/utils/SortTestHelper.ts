export function generateRandomArray(n: number, rangL: number, rangeR: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
        let min = Math.ceil(rangL);
        let max = Math.floor(rangeR);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        arr[i] = res
    }
    return arr;
}
