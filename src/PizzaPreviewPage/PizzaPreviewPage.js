import { Link, Redirect } from "react-router-dom";
import { PizzaPreview } from "./PizzaPreview";
import { usePizza } from "../pizzaContext";
import classNames from "classnames";
import sss from "../PizzaPreviewPage/Price.module.scss";

export const PizzaPreviewPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ваша пицца</h1>
      <PizzaPreview pizza={pizza} />
      <hr />
      <Link to="checkout">
        <button className={classNames(sss.button, sss.button__raised)}>
          CheckoutPage
        </button>
      </Link>
    </div>
  );
};
