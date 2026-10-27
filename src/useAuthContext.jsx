import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [token, setToken] = useState(() => localStorage.getItem("accessToken"));

    function login(accessToken) {
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
    }

    function clearAuth() {
        localStorage.removeItem("accessToken");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, login, clearAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}