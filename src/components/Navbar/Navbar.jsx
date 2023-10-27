import React, { useState, useEffect } from "react";
import "./Navbar.css";
import axios from "axios";

const Navbar = ({ setModuleIndex }) => {
    const [item, setItem] = useState([]);
    const [whichIsActive, setWhichIsActive] = useState(0);

    useEffect(() => {
        axios.get('/data.json')
            .then((response) => setItem(response.data.result));
    }, []);

    return (
        <>
            <div className="navbar">
                {
                    item.map((value, index) => {
                        return (
                            <li className="navlist"
                                key={index}
                                style={{
                                    backgroundColor: whichIsActive === index ? "#04AA6D" : "#191919"
                                }}
                                onClick={() => {
                                    setModuleIndex(index);
                                    setWhichIsActive(index);
                                }}
                            >{value.type}</li>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Navbar;
