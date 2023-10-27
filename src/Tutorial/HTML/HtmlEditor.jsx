import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const HtmlEditor = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="content">
                <h1>HTML Editors</h1>
                <div className="homenext">
                    <Link to="#" onClick={scrollToTop}><button>{"< Home"}</button></Link>
                    <Link to="#" onClick={scrollToTop}><button>{"Next >"}</button></Link>
                </div>

                <div className="definition">
                    <p>HTML is the standard markup language for Web pages.</p>
                    <p>With HTML you can create your own Website.</p>
                    <p>HTML is easy to learn - You will enjoy it!</p>
                    <Link to="https://www.w3schools.com/html/default.asp" target="_blank"><button className="btn1">{"Study Your Free HTML Tutorial >>"}</button></Link>
                    <Link to="https://www.youtube.com/@w3schools" target="_blank"><button className="btn2">{"Watch Our Video Tutorial >>"}</button></Link>
                </div>

                <h2>Easy Learning with HTML "Try it Yourself"</h2>
                <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>

                <div className="example">
                    <h3>Example</h3>
                    <div className="code">
                        <p>{"<title>Page Title</title>"}</p>
                        <p>{"<html>"}</p>
                        <p>{"<head>"}</p>
                        <p>{"<title>Page Title</title>"}</p>
                        <p>{"</head>"}</p>
                        <p>{"<body>"}</p>
                        <p>{"<h1>This is a Heading</h1>"}</p>
                        <p>{"<p>This is a paragraph.</p>"}</p>
                        <p>{"</body>"}</p>
                        <p>{"</html>"}</p>
                    </div>
                    <Link to="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" target="_blank"><button>{"Try it Yourself >>"}</button></Link>
                </div>

                <p style={{ marginTop: "25px", marginBottom: "40px", fontSize: "18px", fontWeight: "600" }}>Click on the "Try it Yourself" button to see how it works.</p>

                <div className="examples">
                    <h1>HTML Examples</h1>
                    <p>In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</p>
                    <Link to="https://www.w3schools.com/html/html_examples.asp" target="_blank"><button>Go to HTML Examples!</button></Link>
                </div>

                <div className="exercise">
                    <h2 style={{ marginTop: "30px" }}>HTML Exercises</h2>
                    <p style={{ marginBottom: "30px" }}>This HTML tutorial also contains nearly 100 HTML exercises.</p>
                </div>

                <div className="testyourself">
                    <p style={{ color: "white" }}>Test Yourself With Exercises</p>
                    <div className="testyourself-exercise">
                        <p>Exercise:</p>
                        <p>Add a "tooltip" to the paragraph below with the text "About W3Schools".</p>
                        <div className="input">
                            {"<p"} <span><input style={{ width: "60px", height: "25px", border: "none" }} type="text" /></span>{'="About W3Schools">'}W3Schools is a web developer's site.{"</p>"}
                        </div>
                        <Link to="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_attributes1" target="_blank"><button>{"Submit Answer >>"}</button></Link>
                        <Link to="https://www.w3schools.com/html/exercise.asp?filename=exercise_html_attributes1" target="_blank"><p style={{ textDecoration: "underLine", cursor: "pointer", paddingBottom: "30px" }}>Start the exercise</p></Link>
                    </div>
                </div>

                <div className="homenext">
                    <Link to="#" onClick={scrollToTop}><button>{"< Home"}</button></Link>
                    <Link to="#" onClick={scrollToTop}><button>{"Next >"}</button></Link>
                </div>
            </div>
        </>
    );
};

export default HtmlEditor;
