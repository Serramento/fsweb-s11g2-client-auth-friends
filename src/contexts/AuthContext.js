import axios from "axios";
import { createContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useLocalStorage("s11g2", {});

  const history = useHistory();

  let isLoggedIn = authUser && authUser.token;
  // bu ikisi varsa demek

  const authenticate = (loginInfo) => {
    axios
      .post("http://localhost:9000/api/login", loginInfo)
      .then((res) => {
        setAuthUser(res.data);
        history.push("/friends");
      })
      .catch((err) => console.error(err.response.message));
  };

  const addingFriend = (friendInfo) => {
    axios
      .post("http://localhost:9000/api/friends/add", friendInfo)
      .then((res) => {
        setAuthUser(res.data);
        history.push("/friends");
      })
      .catch((err) => console.error(err.response.message));
  };

  const logOut = () => {
    axiosWithAuth()
      .get("logout")
      .catch((err) => console.error(err.response.message))
      .finally(() => {
        setAuthUser({});
        history.push("/login");
      });
  };

  return (
    <AuthContext.Provider
      value={{ authUser, authenticate, logOut, isLoggedIn, addingFriend }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default AuthContextProvider;
