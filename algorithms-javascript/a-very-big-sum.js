//https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (const num of ar) {
    sum += num;
  }
  return sum;
}
