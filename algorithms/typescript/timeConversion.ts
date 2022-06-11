// https://www.hackerrank.com/challenges/time-conversion/problem
import assert from 'node:assert/strict';

function timeConversion(s: string): string {
  const isPM = s.includes('PM');
  const [hour, min, sec] = s.replace(/PM|AM/, '').split(':');

  if (hour === '12' && isPM) return `${hour}:${min}:${sec}`;
  if (hour === '12' && !isPM) return `00:${min}:${sec}`;
  if (isPM) return `${+hour + 12}:${min}:${sec}`;
  return `${hour}:${min}:${sec}`;
}

assert(timeConversion('07:05:45PM') === '19:05:45');
assert(timeConversion('07:05:45AM') === '07:05:45');
assert(timeConversion('12:05:45PM') === '12:05:45');
assert(timeConversion('12:05:45AM') === '00:05:45');
assert(timeConversion('12:00:00AM') === '00:00:00');
