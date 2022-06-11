// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles: number[]): number {
  let greater = 0;
  let count = 0;

  candles.forEach((candle) => {
    if (candle > greater) {
      greater = candle;
      count = 1;
    } else if (candle === greater) {
      count += 1;
    }
  });

  return count;
}
