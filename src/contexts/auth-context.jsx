import { createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorageState("token", {defaultValue: null});

  const user = {id: token.id, email: token.email};

  const business = {id: token.business.id, name: token.business.name}
  return (
    <AuthContext.Provider value={{ token, setToken, user, business }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Returns authentication context or null.
 * @returns {{
 *   token: string | null,
 *   setToken: (token: string | null) => void,
 *   user: { id: number, email: string } | null,
 *   business: { id: number, name: string } | null
 * } | null}
 */
export const getAuth = () => useContext(AuthContext);

export default AuthProvider;
