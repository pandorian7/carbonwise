import AuthProvider from "./auth-context";

function GlobalContext({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default GlobalContext;
