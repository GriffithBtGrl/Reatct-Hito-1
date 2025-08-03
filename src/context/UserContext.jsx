import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // LOGIN
    const login = async (emailInput, password) => {
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailInput, password }),
        });

        if (res.ok) {
            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
            return data;
        }

        const errorData = await res.json();
        throw new Error(errorData.message || "Error en login");
    };

    // REGISTER
    const register = async (emailInput, password) => {
        const res = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailInput, password }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error("Registration error:", error);
            throw new Error(error.message || "Error en el registro");
        }

        const data = await res.json();
        setToken(data.token);
        setEmail(data.email);
        return data;
    };

    // LOGOUT
    const logout = () => {
        setToken(null);
        setEmail(null);
    };

    // GET PROFILE
    const getProfile = async () => {
        if (!token) {
            throw new Error("No hay token disponible");
        }
        const res = await fetch(`${API_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Error al obtener el perfil");
        }

        const data = await res.json();
        setEmail(data.email);
        return data;
    };

    // ← El return del Provider debe estar aquí, NO dentro de ninguna función
    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
}