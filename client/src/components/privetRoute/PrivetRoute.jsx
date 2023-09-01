import { useContext } from "react";
import { Context } from "../../main";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loadding } = useContext(Context);
  let location = useLocation();
  if (loadding) {
    return <progress className="progress w-full"></progress>;
  }
  if (user) return <div>{children}</div>;
  else
    return (
      <Navigate to={"/user/login"} replace={true} state={{ from: location }} />
    );
};
export default PrivetRoute;
