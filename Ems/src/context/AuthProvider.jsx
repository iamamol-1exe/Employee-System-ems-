import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStoarage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [data, setData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setData(employees);
  }, []);

  // console.log(data);
  return (
    <>
      <AuthContext.Provider value={[data, setData]}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
