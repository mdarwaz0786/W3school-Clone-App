import React, { useState } from "react";
import "./CSS/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/LoginContext.jsx";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/head/login");
        } catch (err) {
            setError(err.message);
        };
    };

    return (
        <>
            <div className="signup">
                <form onSubmit={handleSubmit} className="signup-container">
                    {error && <h2 style={{ color: "red" }}>{error}</h2>}
                    <h1>Sign Up</h1>
                    <div className="signup-fields">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" id="signup-email-input" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="signup-password-input" />
                    </div>
                    <button>Continue</button>
                    <p className="signup-login">Already have an account? <Link to="/head/login" className="signup-login-link">Login here</Link></p>
                </form>
            </div>
        </>
    );
};

export default Signup;
