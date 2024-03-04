// https://www.hackerrank.com/challenges/winning-lottery-ticket/problem

const checkWinningPair = (ticket1: string, ticket2: string) => {
  const concated = ticket1 + ticket2;
  const arrayOfNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return arrayOfNums.every((num) => concated.includes(num));
};

function winningLotteryTicket(tickets: string[]): number {
  let counter = 0;

  tickets.forEach((ticket, index) => {
    for (let i = index + 1; i < tickets.length; i++) {
      if (tickets[i] && checkWinningPair(ticket, tickets[i])) counter++;
    }
  });

  return counter;
}
