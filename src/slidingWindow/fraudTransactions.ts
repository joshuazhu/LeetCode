class Transaction {
  cardNumber: string;
  timestamp: string;
  amount: number;

  constructor(cardNumber: string, timestamp: string, amount: number) {
    this.cardNumber = cardNumber;
    this.timestamp = timestamp;
    this.amount = amount;
  }
}

class TransactionsIn24Hrs {
  transactions: Array<Transaction>;

  constructor(transactions: Array<Transaction>) {
    this.transactions = transactions;
  }

  getTotal() {
    return this.transactions.reduce((acc, cur) => cur.amount + acc, 0);
  }

  getFirstTransaction() {
    return this.transactions[0];
  }
}

const isTwoDatesIn24Hrs = (dateStringA: string, dateStringB: string) => {
  const datetimeA = new Date(dateStringA).getTime();
  const datetimeB = new Date(dateStringB).getTime();

  return (datetimeA - datetimeB) / (60 * 60 * 1000) <= 24;
};

const creditCardTransactionFraudDetection = (
  transactions: Array<Transaction>,
  threshold: number,
) => {
  const transactionsIn24Hrs = new Map<string, TransactionsIn24Hrs>();

  for (let i = 0; i < transactions.length; i++) {
    const currentTransaction = transactions[i];

    if (!transactionsIn24Hrs.has(currentTransaction.cardNumber)) {
      transactionsIn24Hrs.set(
        currentTransaction.cardNumber,
        new TransactionsIn24Hrs([currentTransaction]),
      );

      continue;
    }

    const last24HrsTransactions = transactionsIn24Hrs.get(
      currentTransaction.cardNumber,
    );

    if (
      !isTwoDatesIn24Hrs(
        last24HrsTransactions.getFirstTransaction().timestamp,
        currentTransaction.timestamp,
      )
    ) {
      let firstTransactionInLast24Hrs =
        last24HrsTransactions.transactions.shift();

      while (
        !isTwoDatesIn24Hrs(
          firstTransactionInLast24Hrs.timestamp,
          currentTransaction.timestamp,
        )
      ) {
        firstTransactionInLast24Hrs =
          last24HrsTransactions.transactions.shift();
      }

      last24HrsTransactions.transactions.push(currentTransaction);
    }

    if (
      last24HrsTransactions.getTotal() + currentTransaction.amount >=
      threshold
    ) {
      console.log('Found fraud', currentTransaction.cardNumber);
    } else {
      last24HrsTransactions.transactions.push(currentTransaction);
    }
  }
};

export const run = () => {
  const transaction1 = new Transaction('1', '2022-01-01T01:00:00.000Z', 10);
  const transaction2 = new Transaction('2', '2022-01-01T02:00:00.000Z', 10);
  const transaction3 = new Transaction('1', '2022-01-01T03:00:00.000Z', 10);
  const transaction4 = new Transaction('1', '2022-01-01T04:00:00.000Z', 10);
  const transaction5 = new Transaction('1', '2022-01-01T06:00:00.000Z', 10);
  const transaction6 = new Transaction('2', '2022-01-02T01:00:00.000Z', 10);
  const transaction7 = new Transaction('2', '2022-01-02T02:00:00.000Z', 20);
  const transaction8 = new Transaction('2', '2022-01-02T03:00:00.000Z', 20);
  const transaction9 = new Transaction('3', '2022-01-02T04:00:00.000Z', 10);

  creditCardTransactionFraudDetection(
    [
      transaction1,
      transaction2,
      transaction3,
      transaction4,
      transaction5,
      transaction6,
      transaction7,
      transaction8,
      transaction9,
    ],
    40,
  );
};
