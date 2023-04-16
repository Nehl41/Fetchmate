import { createContext, useState } from "react";

export const UserContext = createContext({
    currUser:null,
    setCurrentUser:()=>null
});

export const UserProvider = ({ children }) => {
    const [currUser,setCurrentUser]=useState(null)
    const value={currUser,setCurrentUser}
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
