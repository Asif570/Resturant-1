import { useEffect, useState } from "react";
import { Context } from "../../main";
import { Auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [foods, setFoods] = useState([]);
  const [chefs, setChefs] = useState([]);
  const [loadding, setLoadding] = useState(true);
  const URI = import.meta.env.VITE_ROOT_SERVER_URL;

  onAuthStateChanged(Auth, (user) => {
    setLoadding(true)
    setUser(user);
    setLoadding(false);
  });

  useEffect(() => {
    setLoadding(true)
    fetch(`${URI}/foods`)
      .then((res) => res.json())
      .then((result) => {
        setLoadding(false)
        setFoods(result)
      })
      .catch((err) => console.error(err));
    fetch(`${URI}/chefs`)
      .then((res) => res.json())
      .then((result) => {
        setLoadding(false)
        setChefs(result)
      })
      .catch((err) => console.error(err));
  }, []);
  const FindFood = (id) => {
    return foods.find((item) => item.id == id);
  };
  const FindChef = (id) => {
    return chefs.find((item) => item.id == id);
  };
  const value = {
    foods,
    FindFood,
    chefs,
    FindChef,
    setUser,
    user,
    loadding,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default ContextProvider;
