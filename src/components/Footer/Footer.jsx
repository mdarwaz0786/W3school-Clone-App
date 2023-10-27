import React from "react";
import "./Footer.css";
import { LuMoveUp } from "react-icons/lu"
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png" alt="logo" />
                    <Link to="#" onClick={scrollToTop}><button><LuMoveUp /></button></Link>
                </div>

                <div className="main">
                    <p>SPACES</p>
                    <p>UPGRADE</p>
                    <p>NEWSLETTER</p>
                    <p>GET CERTIFIED</p>
                    <p>REPORT ERROR</p>
                </div>

                <div className="head">
                    <p>Top Tutorials</p>
                    <p>Top References</p>
                    <p>Top Examples</p>
                    <p>Get Certified</p>
                </div>

                <div className="topic">
                    <div className="tutorial">
                        <p>HTML Tutorial</p>
                        <p>CSS Tutorial</p>
                        <p>JavaScript Tutorial</p>
                        <p>How To Tutorial</p>
                        <p>SQL Tutorial</p>
                        <p>Python Tutorial</p>
                        <p>W3.CSS Tutorial</p>
                        <p>Bootstrap Tutorial</p>
                        <p>PHP Tutorial</p>
                        <p>Java Tutorial</p>
                        <p>C++ Tutorial</p>
                        <p>jQuery Tutorial</p>
                    </div>

                    <div className="reference">
                        <p>HTML Reference</p>
                        <p>CSS Reference</p>
                        <p>JavaScript Reference</p>
                        <p>SQL Reference</p>
                        <p>Python Reference</p>
                        <p>W3.CSS Reference</p>
                        <p>Bootstrap Reference</p>
                        <p>PHP Reference</p>
                        <p>HTML Colors</p>
                        <p>Java Reference</p>
                        <p>Angular Reference</p>
                        <p>jQuery Reference</p>
                    </div>

                    <div className="exam">
                        <p>HTML Examples</p>
                        <p>CSS Examples</p>
                        <p>JavaScript Examples</p>
                        <p>How To Examples</p>
                        <p>SQL Examples</p>
                        <p>Python Examples</p>
                        <p>W3.CSS Examples</p>
                        <p>Bootstrap Examples</p>
                        <p>PHP Examples</p>
                        <p>Java Examples</p>
                        <p>XML Examples</p>
                        <p>jQuery Examples</p>
                    </div>

                    <div className="certificate">
                        <p>HTML Certificate</p>
                        <p>CSS Certificate</p>
                        <p>JavaScript Certificate</p>
                        <p>Front End Certificate</p>
                        <p>SQL Certificate</p>
                        <p>Python Certificate</p>
                        <p>PHP Certificate</p>
                        <p>jQuery Certificate</p>
                        <p>Java Certificate</p>
                        <p>C++ Certificate</p>
                        <p>C# Certificate</p>
                        <p>XML Certificate</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
