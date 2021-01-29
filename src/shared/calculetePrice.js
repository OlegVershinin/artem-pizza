import { CHEESE, MEAT, SIZE, VEGETABLE, DOUGH, SAUCE } from "./pizzaData";

export function calculatePrice({
  size,
  cheeses,
  vegetables,
  meat,
  dough,
  sauce,
}) {
  const sizePrice = SIZE[size].price;
  const doughPrice = DOUGH[dough].price;
  const saucePrice = SAUCE[sauce].price;

  const cheesesPrice = cheeses.reduce(
    (price, cheese) => price + CHEESE[cheese].price,
    0
  );
  const vegetablesPrice = vegetables.reduce(
    (price, vegetable) => price + VEGETABLE[vegetable].price,
    0
  );
  const meatPrice = meat.reduce((price, meat) => price + MEAT[meat].price, 0);

  return (
    sizePrice +
    cheesesPrice +
    vegetablesPrice +
    meatPrice +
    doughPrice +
    saucePrice
  );
}
