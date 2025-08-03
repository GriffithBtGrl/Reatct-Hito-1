import React from 'react'
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { email, logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="container py-5 text-center">
            <h2>Perfil de usuario</h2>
            <p>Email: <strong>{email}</strong></p>
            <button className="btn btn-danger mt-3"> Cerrar sesión</button>
        </div>
    );
};

export default Profile
