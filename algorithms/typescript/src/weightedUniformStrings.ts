// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

const getUniformStrings = (sentence: string): string[] => {
  const charArr = sentence.split('');

  const result = charArr.reduce<string[]>((acc, char, i) => {
    let substring = '';

    for (let j = i; j >= 0; j--) {
      if (charArr[j] === char) substring += char;
      else break;
    }

    return [...acc, substring];
  }, []);

  return result;
};

const getCharWeight = (char: string): number => char.charCodeAt(0) - 96;

const getUniformStringsWeights = (uniformStrings: string[]): number[] =>
  uniformStrings.map((element) => getCharWeight(element.charAt(0)) * element.length);

function weightedUniformStrings(input: string, queries: number[]): string[] {
  const uniformStrings = getUniformStrings(input);
  const uniformStringsWeights = getUniformStringsWeights(uniformStrings);

  return queries.map((query) => (uniformStringsWeights.includes(query) ? 'Yes' : 'No'));
}
