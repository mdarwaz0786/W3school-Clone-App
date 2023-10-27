import React, { useState } from "react";
import "./CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/LoginContext.jsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        };
    };

    return (
        <>
            <div className="login">
                <form onSubmit={handleSubmit} className="login-container">
                    {error && <h2 style={{ color: "red" }}>{error}</h2>}
                    <h1>Login</h1>
                    <div className="login-fields">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" id="login-email-input" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="login-password-input" />
                    </div>
                    <button className="login-btn">Continue</button>
                    <p className="login-signup">Don't have an account? <Link to="/head/signup" className="login-signup-link">Signup here</Link></p>
                </form>
            </div>
        </>
    );
};

export default Login;
