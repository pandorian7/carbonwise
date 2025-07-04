import { createContext, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({token: null});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorageState("token", {
    defaultValue: null,
  });

  let user, business;
  try {
    const data = jwtDecode(token);

    const { email, name, business: businessName } = data;

    user = { email, name };
    business = { name: businessName };
  } catch {
    user = null;
    business = null;
  }
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
