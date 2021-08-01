// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let num of ar) {
    sum += num;
  }
  return sum;
}
