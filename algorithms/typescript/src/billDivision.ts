// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill: number[], k: number, b: number): void {
    const sumWithAnaPart = bill.reduce((acc, num) => acc + num, 0);
    const sumWithoutAnaPart = sumWithAnaPart - bill[k];
    const valueWithoutAnaPart = sumWithoutAnaPart / 2;

    if (b === valueWithoutAnaPart) console.log('Bon Appetit');
    else console.log(b - valueWithoutAnaPart);
}
