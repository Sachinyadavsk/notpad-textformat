import React, { useState } from "react";

function About(props) {

    // 🎨 THEME COLORS
    const themeStyle = {
        backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#000000",
    };

    return (
        <>
            <div className="container py-5" style={themeStyle}>
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


        </>
    );
}

export default About;
