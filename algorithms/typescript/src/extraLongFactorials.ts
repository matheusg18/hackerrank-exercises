// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n: number): void {
    let factorial = 1n;

    for (let i = 1; i <= n; i++) {
        factorial *= BigInt(i);
    }

    console.log(factorial.toString());
}

extraLongFactorials(3); // 6
extraLongFactorials(25); // 15511210043330985984000000
