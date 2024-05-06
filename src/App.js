import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { _apiCallGet } from "./Services/useApi.ts";
import LocalRoutes from "./Routes/Routes.jsx";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");

  const isLoggedIn = async (token) => {
    try {
      const request = await _apiCallGet("/user", token);
      dispatch({
        type: "currentUser",
        payload: request.data,
      });
      dispatch({
        type: "site_loading",
        payload: false,
      });
      return request;
    } catch (err) {
      dispatch({
        type: "site_loading",
        payload: false,
      });
      return err;
    }
  };

  useEffect(() => {
    if (token) {
      dispatch({
        type: "site_loading",
        payload: true,
      });
      isLoggedIn(token);
    }
    return () => {
      return null;
    };
  });
  return <LocalRoutes />;
}

export default App;
