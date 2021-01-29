import { calculatePrice } from "./calculetePrice";

describe("calculetePrice", () => {
  it("возвращает итоговую сумму выбранных ингридиентов", () => {
    expect(
      calculatePrice({
        size: "35 см",
        dough: "тонкое",
        sauce: "белый",

        cheeses: ["моцарелла", "чеддер", "дор блю"],
        vegetables: ["помидор", "грибы", "перец"],
        meat: ["бекон", "пепперони", "ветчина"],
      })
    ).toEqual(511);
  });
});
