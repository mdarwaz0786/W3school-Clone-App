import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Tutorial from "./Service/Tutorial.jsx";
import Exercise from "./Service/Exercise.jsx";
import Service from "./Service/Service.jsx";
import Job from "./Service/Job.jsx";
import Space from "./Service/Space.jsx";
import GetCertificate from "./Service/GetCertificate.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import Signup from "./Pages/Signup.jsx";
import HtmlHome from './Tutorial/HTML/HtmlHome.jsx';
import HtmlIntroduction from './Tutorial/HTML/HtmlIntroduction.jsx'
import HtmlEditor from "./Tutorial/HTML/HtmlEditor.jsx";
import HtmlBasic from "./Tutorial/HTML/HtmlBasic.jsx";
import CssHome from "./Tutorial/CSS/CssHome.jsx";
import CssIntroduction from "./Tutorial/CSS/CssIntroduction.jsx";
import CssSelector from "./Tutorial/CSS/CssSelector.jsx";
import CssSyntax from "./Tutorial/CSS/CssSyntax.jsx";


const Layout = () => {
    const [moduleIndex, setModuleIndex] = useState(0);
    const [moduleTopicIndex, setModuleTopicIndex] = useState(0);

    const indexToContent = [
        [
            <HtmlHome />,
            <HtmlIntroduction />,
            <HtmlEditor />,
            <HtmlBasic />
        ],
        [
            <CssHome />,
            <CssIntroduction />,
            <CssSyntax />,
            <CssSelector />
        ],
    ];

    return (
        <>
            <Header />
            <Navbar setModuleIndex={setModuleIndex} />
            <div className="layout">
                <Sidebar moduleIndex={moduleIndex} setModuleTopicIndex={setModuleTopicIndex} />
                <div>
                    {
                        indexToContent.length > moduleIndex && indexToContent[moduleIndex].length > moduleTopicIndex && indexToContent[moduleIndex][moduleTopicIndex]
                    }
                    <Footer />
                </div>
            </div>
        </>
    );
};

const Head = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/head" element={<Head />}>
                    <Route path="tutorial" element={<Tutorial />} />
                    <Route path="exercise" element={<Exercise />} />
                    <Route path="service" element={<Service />} />
                    <Route path="job" element={<Job />} />
                    <Route path="space" element={<Space />} />
                    <Route path="GetCertificate" element={<GetCertificate />} />
                    <Route path="login" element={<Login />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
