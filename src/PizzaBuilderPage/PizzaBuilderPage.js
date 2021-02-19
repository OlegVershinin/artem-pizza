import { useHistory } from "react-router-dom";
import { FormOrder } from "./FormOrder";
import { usePizza } from "../pizzaContext";

export const PizzaBuilderPage = () => {
  const { setPizza } = usePizza();
  const history = useHistory();

  const onPizzaChange = (pizza) => {
    setPizza(pizza);
    history.push("/pizza-preview");
  };

  return (
    <div>
      <FormOrder onPizzaCreated={onPizzaChange} />
    </div>
  );
};
