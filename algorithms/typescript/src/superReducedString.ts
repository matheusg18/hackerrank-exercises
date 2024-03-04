// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(input: string): string {
  const regex = /(\w)\1/;

  for (let i = true; i; ) {
    if (regex.test(input)) input = input.replace(regex, '');
    else i = false;
  }

  return input || 'Empty String';
}
