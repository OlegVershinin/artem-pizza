import { FormOrder } from "./Formorder";
const { render } = require("@testing-library/react");

describe("FormOrder", () => {
  it("renders correctly", () => {
    const { getByText } = render(<FormOrder />);
    expect(getByText("Выбери размер:")).toBeInTheDocument();
  });

  describe("Проверка - минимальный набор ингридиентов", () => {
    it.todo("show minimum price");
  });

  describe("Проверка - максимальный набор ингридиентов", () => {
    it.todo("show maximum price");
  });

  describe("onPizzaSubmit", () => {
    it.todo("показывает готовую пиццу");
  });
});
