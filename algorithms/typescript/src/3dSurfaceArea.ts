// https://www.hackerrank.com/challenges/3d-surface-area/problem
import assert from 'node:assert/strict';

function surfaceArea(A: number[][]): number {
    let area = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            area += calculateArea(A, i, j);
        }
    }

    return area;
}

function calculateArea(A: number[][], i: number, j: number): number {
    const up = A[i]?.[j + 1] ?? 0;
    const down = A[i]?.[j - 1] ?? 0;
    const right = A?.[i + 1]?.[j] ?? 0;
    const left = A?.[i - 1]?.[j] ?? 0;

    let area = 2; // starts with area of top and bottom surfaces
    if (A[i][j] > up) area += A[i][j] - up;
    if (A[i][j] > down) area += A[i][j] - down;
    if (A[i][j] > right) area += A[i][j] - right;
    if (A[i][j] > left) area += A[i][j] - left;

    return area;
}

assert.equal(surfaceArea([[1]]), 6);
assert.equal(
    surfaceArea([
        [2, 2],
        [3, 4],
    ]),
    34,
);
assert.equal(
    surfaceArea([
        [1, 3, 4],
        [2, 2, 3],
        [1, 2, 4],
    ]),
    60,
);
