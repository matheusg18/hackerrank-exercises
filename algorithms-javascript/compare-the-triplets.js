//https://www.hackerrank.com/challenges/compare-the-triplets/problem

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  // Write your code here
  let score = [0, 0];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > b[i]) {
      score[0] += 1;
    } else if (a[i] < b[i]) {
      score[1] += 1;
    }
  }

  return score;
}
