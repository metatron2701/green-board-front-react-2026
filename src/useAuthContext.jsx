import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [token, setToken] = useState(() => localStorage.getItem("accessToken"));

    function login(accessToken) {
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
    }

    async function logout() {
        const response = await fetch(
            `http://127.0.0.1:8080/api/user/logout`,
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${token}`
                }
            }
        );
        if (response.status !== 204) {
            const result = await response.json().catch(() => null);
            if (!response.ok || !result?.success) {
                throw new Error(result?.message || "로그아웃이 실패했습니다.");
            }
        }
        clearAuth();
    }

    function clearAuth() {
        localStorage.removeItem("accessToken");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, login, logout, clearAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}