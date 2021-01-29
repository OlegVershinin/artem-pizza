import { useHistory } from "react-router-dom";
import { useAuth } from "../pizzaContext";
import classNames from "classnames";
import sss from "../PizzaPreviewPage/Price.module.scss";

export const RegistrationPage = () => {
  const { logIn } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    logIn();
    history.push("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "3vh" }}>RegistrationPage</h1>
      <button
        className={classNames(sss.button, sss.button__raised)}
        onClick={handleLogin}
      >
        Sign Up
      </button>
    </div>
  );
};
