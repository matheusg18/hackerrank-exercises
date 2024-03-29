// https://www.hackerrank.com/challenges/find-digits/problem
import assert from 'node:assert/strict';

function findDigits(n: number): number {
    const digitsArr = [...n.toString()].map((char) => parseInt(char, 10));
    return digitsArr.reduce((acc, digit) => (isDivisor(n, digit) ? acc + 1 : acc), 0);
}

function isDivisor(num: number, possibleDivisor: number): boolean {
    return num % possibleDivisor === 0;
}

assert.equal(findDigits(124), 3);
assert.equal(findDigits(111), 3);
assert.equal(findDigits(10), 1);
assert.equal(findDigits(12), 2);
assert.equal(findDigits(1012), 3);
