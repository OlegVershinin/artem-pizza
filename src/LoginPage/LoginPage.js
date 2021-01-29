import { useHistory } from "react-router-dom";
import { useAuth } from "../pizzaContext";
import classNames from "classnames";
import sss from "../PizzaPreviewPage/Price.module.scss";

export const LoginPage = () => {
  const { logIn, logOut } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    logIn();
    history.push("/pizza-builder");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "3vh" }}>LoginPage</h1>
      <button
        className={classNames(sss.button, sss.button__raised)}
        onClick={handleLogin}
      >
        Log In
      </button>
      <button
        style={{ marginLeft: "3vh" }}
        className={classNames(sss.button, sss.button__raised)}
        onClick={logOut}
      >
        Log out
      </button>
    </div>
  );
};
