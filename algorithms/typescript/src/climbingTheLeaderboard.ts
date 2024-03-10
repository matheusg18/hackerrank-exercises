// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
import assert from 'node:assert/strict';

function climbingLeaderboard(rankingArr: number[], playerRankArr: number[]): number[] {
    const uniqueRankingArr = Array.from(new Set(rankingArr));

    return playerRankArr.map((playerRank) => getPosition(uniqueRankingArr, playerRank));
}

function getPosition(uniqueRankingArr: number[], playerRank: number): number {
    if (playerRank > uniqueRankingArr[0]) return 1;

    let upperLimit = uniqueRankingArr.length - 1;
    let lowerLimit = 0;

    while (lowerLimit <= upperLimit) {
        const mid = Math.ceil((lowerLimit + upperLimit) / 2);
        const actualRank = uniqueRankingArr[mid];
        const nextRank = uniqueRankingArr[mid + 1];

        if (playerRank === actualRank) return mid + 1;
        else if (playerRank < actualRank && playerRank >= nextRank) return mid + 2;

        if (playerRank > actualRank) upperLimit = mid - 1;
        else lowerLimit = mid + 1;
    }

    return uniqueRankingArr.length + 1;
}

assert.deepEqual(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]), [4, 3, 1]);
assert.deepEqual(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]), [6, 5, 4, 2, 1]);
