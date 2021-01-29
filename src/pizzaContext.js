const { createContext, useContext, useState } = require("react");

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState();
  const [authed, setAuthed] = useState(false);

  const logIn = () => {
    setAuthed(true);
  };

  const logOut = () => {
    setAuthed(false);
  };

  return (
    <PizzaContext.Provider value={{ pizza, setPizza, authed, logIn, logOut }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
export const useAuth = () => useContext(PizzaContext);
