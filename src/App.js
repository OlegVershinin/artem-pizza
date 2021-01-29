import { Route, Switch } from "react-router-dom";
import { CheckoutPage } from "./CheckoutPage";
import { LoginPage } from "./LoginPage";
import { NotFoundPage } from "./NotFoundPage";
import { PizzaBuilderPage } from "./PizzaBuilderPage";
import { PizzaPreviewPage } from "./PizzaPreviewPage";
import { PrivateRoute } from "./PrivateRouter";
import { RegistrationPage } from "./RegistrationPage/index ";
import { Header } from "./sharedComponents/Header";
import s from "./App.module.scss";

function App() {
  return (
    <>
      <header>
        <div className={s.container}>
          <Header />
        </div>
      </header>

      <Switch>
        <Route exact path="/">
          <RegistrationPage />
        </Route>

        <PrivateRoute path="/login">
          <LoginPage />
        </PrivateRoute>

        <PrivateRoute path="/pizza-builder">
          <PizzaBuilderPage />
        </PrivateRoute>

        <PrivateRoute path="/pizza-preview">
          <PizzaPreviewPage />
        </PrivateRoute>

        <PrivateRoute path="/checkout">
          <CheckoutPage />
        </PrivateRoute>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
