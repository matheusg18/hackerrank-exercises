// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
import assert from 'node:assert/strict';

function divisibleSumPairs(_n: number, k: number, ar: number[]): number {
    const tuplesArr = [];

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if (j >= ar.length) break;

            if (isDisible(ar[i] + ar[j], k)) tuplesArr.push([i, j]);
        }
    }

    return tuplesArr.length;
}

function isDisible(a: number, b: number): boolean {
    return a % b === 0;
}

assert.equal(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]), 5);
assert.equal(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]), 3);
