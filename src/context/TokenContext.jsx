import { createContext, useState } from "react";

export const TokenContext = createContext({});

export function TokenProvider({ children }) {
  const [token, setToken] = useState("");
  const AuthStr = "Bearer ".concat(token);

  return (
    <TokenContext.Provider
      value={{
        AuthStr,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
