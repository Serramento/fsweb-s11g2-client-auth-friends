import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Logout() {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    logOut();
  }, []);

  return <div>Logging out in progress...</div>;
}

export default Logout;
