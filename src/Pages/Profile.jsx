import React from "react";
import "./CSS/Profile.css";
import { useUserAuth } from "../Context/LoginContext.jsx";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { user, logOut } = useUserAuth();
    if (!user) {
        return <Navigate to="/head/login" />;
    };

    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        };
    };

    return (
        <>
            <div className="profile">
                <div className="profile-name">
                    Hello Welcome,  {user && user.email}
                </div>
                <div className="profile-btn">
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </>
    );
};

export default Profile;
