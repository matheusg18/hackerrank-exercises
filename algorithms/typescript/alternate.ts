// https://www.hackerrank.com/challenges/two-characters/problem

const isValid = (sentence: string): boolean => {
  const regex = /^([a-z])(?!\1)([a-z])(?:\1\2)*\1?$/;
  return regex.test(sentence);
};

const getPresentCharacters = (input: string): string[] => Array.from(new Set(input.split('')));

const getCombinations = (characters: string[]): [string, string][] => {
  const combinations: [string, string][] = [];

  characters.forEach((char, i) => {
    for (; i < characters.length; i++) {
      if (char !== characters[i]) combinations.push([char, characters[i]]);
    }
  });

  return combinations;
};

function alternate(input: string) {
  const combinations = getCombinations(getPresentCharacters(input));

  const longestAlternation = combinations.reduce((acc, [pos1, pos2]) => {
    const regex = new RegExp(`[^${pos1}${pos2}]`, 'g');
    const result = input.replace(regex, '');

    if (isValid(result) && result.length > acc.length) return result;

    return acc;
  }, '');

  return longestAlternation.length;
}
