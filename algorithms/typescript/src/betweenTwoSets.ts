// https://www.hackerrank.com/challenges/between-two-sets/problem
import assert from 'node:assert/strict';

function getTotalX(a: number[], b: number[]): number {
    const bFactorsArr = b.map(getFactors);
    const bFactors = getFactorsIntersection(bFactorsArr);

    const numbers = bFactors.filter((bFactor) => a.every((aNum) => isFactor(bFactor, aNum)));
    return numbers.length;
}

function getFactors(num: number): number[] {
    const factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factors.push(i);
    }

    return factors;
}

function getFactorsIntersection(factorsArr: number[][]): number[] {
    return factorsArr.reduce((acc, factors) => getIntersectionBetweenArrays(acc, factors), factorsArr[0]);
}

function getIntersectionBetweenArrays(a: number[], b: number[]): number[] {
    return a.filter((num) => b.includes(num));
}

function isFactor(num: number, possibleFactor: number): boolean {
    return num % possibleFactor === 0;
}

assert.equal(getTotalX([2, 6], [24, 36]), 2);
assert.equal(getTotalX([3, 4], [24, 48]), 2);
assert.equal(getTotalX([2, 4], [16, 32, 96]), 3);
