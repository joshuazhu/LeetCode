class Card {
  price: Map<string, number>;
  name: string;
  backingColor: string;

  constructor(price: Map<string, number>, name: string, backingColor: string) {
    this.price = price;
    this.name = name;
    this.backingColor = backingColor;
  }
}

const canPurchase = (card: Card, wallet: Map<string, number>) => {
  for (const tokenColor of Array.from(card.price.keys())) {
    if (
      !(
        wallet.has(tokenColor) &&
        wallet.get(tokenColor) + wallet.get('gold') >=
          card.price.get(tokenColor)
      )
    ) {
      return false;
    }
  }

  return true;
};

const purchase = (card: Card, wallet: Map<string, number>) => {
  for (const tokenColor of Array.from(card.price.keys())) {
    if (wallet.get(tokenColor) - card.price.get(tokenColor) < 0) {
      const outstanding = card.price.get(tokenColor) - wallet.get(tokenColor);
      wallet.set(tokenColor, 0);
      wallet.set('gold', wallet.get('gold') - outstanding);
    } else {
      wallet.set(
        tokenColor,
        wallet.get(tokenColor) - card.price.get(tokenColor),
      );
    }
  }
};

const applyDiscount = (card: Card, wallet: Map<string, number>) => {
  wallet.set(card.backingColor, wallet.get(card.backingColor) + 1);
  console.log(`wallet after apply discount ${card.name}`, wallet);
};

const purchases = (cards: Array<Card>, wallet: Map<string, number>) => {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];

    if (canPurchase(card, wallet)) {
      purchase(card, wallet);
      console.log(`wallet after purchase ${card.name}`, wallet);

      const isLastCard = i === cards.length - 1;

      if (!isLastCard) {
        applyDiscount(card, wallet);
      }
    } else {
      console.log('wallet cannot purchase', card.name);
    }
  }
};

export const run = () => {
  const card1 = new Card(
    new Map([
      ['white', 2],
      ['red', 3],
    ]),
    'card1',
    'white',
  );

  const card2 = new Card(
    new Map([
      ['white', 1],
      ['blue', 2],
    ]),
    'card1',
    'blue',
  );

  const card3 = new Card(new Map([['blue', 1]]), 'card1', 'red');
  const card4 = new Card(new Map([['blue', 1]]), 'card1', 'red');

  const wallet1 = new Map([
    ['white', 2],
    ['blue', 2],
    ['red', 3],
    ['gold', 1],
  ]);

  purchases([card1, card2, card3, card4], wallet1);
};
