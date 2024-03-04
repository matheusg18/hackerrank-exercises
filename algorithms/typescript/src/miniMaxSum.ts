// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr: number[]): void {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  arr.forEach((_cycle, i) => {
    const sumOfThisCycle = arr.reduce((acc, num, j) => (i === j ? acc : acc + num), 0);

    min = sumOfThisCycle < min ? sumOfThisCycle : min;
    max = sumOfThisCycle > max ? sumOfThisCycle : max;
  });

  console.log(`${min} ${max}`);
}
