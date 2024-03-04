// https://www.hackerrank.com/challenges/missing-numbers/problem
import assert from 'node:assert/strict';

type FrequencyMapType = {
    [key: string]: number;
};

function missingNumbers(arr: number[], brr: number[]): number[] {
    const arrFrequencyMap = buildFrequencyMap(arr);
    const brrFrequencyMap = buildFrequencyMap(brr);
    const missingNumbers: number[] = [];

    for (const key in brrFrequencyMap) {
        if (!arrFrequencyMap[key] || arrFrequencyMap[key] !== brrFrequencyMap[key]) missingNumbers.push(+key);
    }

    return missingNumbers.sort((a, b) => a - b);
}

function buildFrequencyMap(numArray: number[]): FrequencyMapType {
    const frequencyMap: FrequencyMapType = {};

    for (let i = 0; i < numArray.length; i++) {
        const actual = numArray[i];

        frequencyMap[actual] = frequencyMap[actual] ? frequencyMap[actual] + 1 : 1;
    }

    return frequencyMap;
}

assert.deepEqual(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]), [4, 6]);
assert.deepEqual(
    missingNumbers(
        [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
        [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204],
    ),
    [204, 205, 206],
);
