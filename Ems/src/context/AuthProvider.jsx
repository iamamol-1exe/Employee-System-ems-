import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStoarage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setData({ employees, admin });
  }, []);

  console.log(data);
  return (
    <>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
