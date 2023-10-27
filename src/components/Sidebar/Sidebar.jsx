import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = ({ moduleIndex, setModuleTopicIndex }) => {
    const [item, setItem] = useState({});
    const [whichIsActive, setWhichIsActive] = useState(0);

    useEffect(() => {
        axios.get("/data.json")
            .then((response) => setItem(response.data.result[moduleIndex]));
    }, [moduleIndex]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="sidebar">
                <h2>{item?.heading}</h2>
                {
                    item?.modules?.map((value, index) => {
                        return (
                            <div
                                style={{
                                    backgroundColor: whichIsActive === index ? "#04AA6D" : "#E7E9EB",
                                    color: whichIsActive === index && "white",
                                }}
                                onClick={() => {
                                    scrollToTop();
                                    setModuleTopicIndex(index);
                                    setWhichIsActive(index);
                                }}
                            >
                                <p key={index}>{value}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Sidebar;
