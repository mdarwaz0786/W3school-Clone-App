import React from "react";
import "./Header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png" alt="logo" /></Link>
                    <Link to="/head/tutorial" className="header-link"><li>Tutorial</li></Link>
                    <Link to="/head/exercise" className="header-link"><li>Exercises</li></Link>
                    <Link to="/head/service" className="header-link"><li>Services</li></Link>
                    <input id="header-input" type="text" placeholder="Search..." />
                    <button><AiOutlineSearch className="serach-icon" /></button>
                </div>

                <div className="header-right">
                    <Link to="/head/job" className="header-link">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" color="#9763f6" viewBox="0 0 640 512" aria-hidden="true">
                                <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96h64c35.3 0 64 28.7 64 64V280 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V280 160c0-35.3 28.7-64 64-64h64zM48 304V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V304H320v16c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V304H48zm144-48H320 464V160c0-8.8-7.2-16-16-16H360 152 64c-8.8 0-16 7.2-16 16v96H192z" fill="currentColor"></path>
                            </svg>
                            Jobs
                        </li>
                    </Link>

                    <Link to="/head/space" className="header-link">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" color="#9763f6" viewBox="0 0 640 512" aria-hidden="true">
                                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" fill="currentColor"></path>
                            </svg>
                            Spaces
                        </li>
                    </Link>

                    <Link to="/head/GetCertificate" className="header-link">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" color="#9763f6" viewBox="0 0 576 512" aria-hidden="true">
                                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" fill="currentColor"></path>
                            </svg>
                            Get Certified
                        </li>
                    </Link>

                    <div className="logsign-btn">
                        <Link to="/head/profile"><button className="profile-btn1">Profile</button></Link>
                        <Link to="/head/signup"><button className="signup-btn1">Sign Up</button></Link>
                        <Link to="/head/login"> <button className="login-btn1">Log in</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
