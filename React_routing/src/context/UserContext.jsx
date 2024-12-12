import { createContext } from "react";

 

export const DataContext = createContext();


const UserContext = ({ children }) => {


   const user ="Amol"
    


  return (
      <>
      <DataContext.Provider value={user}>

      <div>{children}</div>
      </DataContext.Provider>
    </>
  );
};

export default UserContext;
