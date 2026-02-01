import React, { useState } from "react";

function About() {
    const [mtStyle, setMtStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (mtStyle.color === "black") {
            setMtStyle({
                color: "white",
                backgroundColor: "#121212",
            });
            setBtnText("Enable Light Mode");
        } else {
            setMtStyle({
                color: "black",
                backgroundColor: "white",
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <>
            <div className="container py-5" style={mtStyle}>
                <div className="row g-4">

                    {/* Column 1 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="p-3 h-100">
                            <h4 className="fw-bold mb-3">Who We Are</h4>
                            <p>
                                We are a learning-focused platform built to provide
                                simple, clear, and reliable information for users.
                            </p>
                            <p>
                                Our content is designed to be easy to understand
                                and accessible across all devices.
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="p-3 h-100">
                            <h4 className="fw-bold mb-3">What We Offer</h4>
                            <p>
                                We provide structured content on web development,
                                programming basics, and skill development.
                            </p>
                            <p>
                                Topics are presented in text form to keep learning
                                focused and distraction-free.
                            </p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="p-3 h-100">
                            <h4 className="fw-bold mb-3">Our Mission</h4>
                            <p>
                                Our mission is to help learners grow with confidence
                                through consistent and practical knowledge.
                            </p>
                            <p>
                                We support continuous learning and career growth
                                through clarity and simplicity.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Toggle Button */}
            <div className="container text-center mb-4">
                <button
                    className="btn btn-primary px-4"
                    onClick={toggleStyle}
                >
                    {btnText}
                </button>
            </div>
        </>
    );
}

export default About;
