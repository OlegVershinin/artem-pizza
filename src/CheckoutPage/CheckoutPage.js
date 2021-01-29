import { Link } from "react-router-dom";
import classNames from "classnames";
import sss from "../PizzaPreviewPage/Price.module.scss";

export const CheckoutPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>CheckoutPage </h1>
      <hr />
      <Link to="/pizza-builder">
        <button className={classNames(sss.button, sss.button__raised)}>
          Вернуться на главную
        </button>
      </Link>

      <Link to="/">
        <button
          className={classNames(sss.button, sss.button__raised)}
          style={{ marginLeft: "3vh" }}
        >
          Выход
        </button>
      </Link>
    </div>
  );
};
