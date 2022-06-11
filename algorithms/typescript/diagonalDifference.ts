// https://www.hackerrank.com/challenges/diagonal-difference/problem

const getMainDiagonalSum = (arr: number[][]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }

  return sum;
};

const getSecondaryDiagonalSum = (arr: number[][]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][arr.length - i - 1];
  }

  return sum;
};

function diagonalDifference(arr: number[][]): number {
  return Math.abs(getMainDiagonalSum(arr) - getSecondaryDiagonalSum(arr));
}
