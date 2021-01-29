import {
  CHEESE,
  MEAT,
  SIZE,
  VEGETABLE,
  DOUGH,
  SAUCE,
} from "../shared/pizzaData";

export const PizzaPreview = ({ pizza }) => {
  return (
    <>
      <p>Размер: {SIZE[pizza.size].name}</p>
      <p>Тесто: {DOUGH[pizza.dough].name}</p>
      <p>Соус: {SAUCE[pizza.sauce].name}</p>
      <p>Сыр: {pizza.cheeses.map((c) => CHEESE[c].name).join(", ")}</p>
      <p>Овощи: {pizza.vegetables.map((v) => VEGETABLE[v].name).join(", ")}</p>
      <p>Мясо: {pizza.meat.map((m) => MEAT[m].name).join(", ")}</p>
    </>
  );
};
