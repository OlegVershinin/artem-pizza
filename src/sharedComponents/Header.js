import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import "./Header.module.scss";

export const Header = () => {
  return (
    <nav>
      <div className={s.menu}>
        <Link to="/pizza-builder">Артем Пицца</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Sing Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/pizza-builder">Pizza Builder</Link>
        </li>
        <li>
          <Link to="/pizza-preview">Pizza Preview</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};
