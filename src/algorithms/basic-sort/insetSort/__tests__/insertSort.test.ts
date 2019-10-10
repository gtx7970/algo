import { insertSort } from '../insetSort';

describe('test-insertSort', () => {
    const testArr = SortHelper.generateRandomArray(10, 0, 50);
    test('isSorted', () => {
        expect(SortHelper.isSorted(insertSort(testArr))).toBe(true);
    });
});
