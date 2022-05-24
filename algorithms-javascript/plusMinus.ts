// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr: number[]): void {
  const count = {
    positives: 0,
    zeros: 0,
    negatives: 0,
  };

  arr.forEach((num) => {
    if (num > 0) count.positives++;
    else if (num === 0) count.zeros++;
    else count.negatives++;
  });

  console.log((count.positives / arr.length).toFixed(6));
  console.log((count.negatives / arr.length).toFixed(6));
  console.log((count.zeros / arr.length).toFixed(6));
}
