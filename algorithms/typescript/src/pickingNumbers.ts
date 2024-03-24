// https://www.hackerrank.com/challenges/picking-numbers/problem
import assert from 'node:assert/strict';

function pickingNumbers(numArr: number[]): number {
    const sortedNumArr = numArr.sort((a, b) => a - b);
    let maxLength = 0;

    for (let i = 0; i < sortedNumArr.length; i = findNextNumberIndex(sortedNumArr, i)) {
        const actualSubArray = [sortedNumArr[i]];

        for (let j = i + 1; j < sortedNumArr.length; j++) {
            if (sortedNumArr[j] - sortedNumArr[i] > 1) break;

            actualSubArray.push(sortedNumArr[j]);
        }

        if (actualSubArray.length > maxLength) maxLength = actualSubArray.length;
    }

    return maxLength;
}

function findNextNumberIndex(numArr: number[], actualIndex: number): number {
    for (let i = actualIndex + 1; i < numArr.length; i++) {
        if (numArr[i] !== numArr[actualIndex]) return i;
    }

    return numArr.length;
}

assert.equal(pickingNumbers([4, 6, 5, 3, 3, 1]), 3);
assert.equal(pickingNumbers([1, 2, 2, 3, 1, 2]), 5);
assert.equal(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]), 5);
