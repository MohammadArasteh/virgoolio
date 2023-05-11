import React from "react";
import { User } from "@/types/users";
import { getItemFromLocalStorage, useLocalStorage } from "./LocalStorageCtx";

const AuthContext = React.createContext<User | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | undefined>(
    getItemFromLocalStorage("Authentication")
  );
  const [auth] = useLocalStorage("Authentication");

  React.useEffect(() => {
    setUser(auth);
  }, [auth]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useAuth = (): User | undefined => React.useContext(AuthContext);

export { AuthProvider, useAuth };
