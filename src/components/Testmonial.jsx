import React from "react";

function Testmonial(props) {

    const themeStyle = {
        backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#000000",
    };

    return (
        <div className="container py-5" style={themeStyle}>

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Testimonials</h1>
                <p className="text-muted">
                    What our users say about their experience
                </p>
            </div>

            {/* Testimonial Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">

                    <h5 className="fw-semibold mt-4">User Experience</h5>
                    <p className="text-secondary">
                        “The platform is simple, clean, and very easy to understand.
                        The content helped me learn step by step without confusion.”
                    </p>

                    <h5 className="fw-semibold mt-4">Learning Support</h5>
                    <p className="text-secondary">
                        “The explanations are clear and well structured.
                        I gained confidence in web development and programming basics.”
                    </p>

                    <h5 className="fw-semibold mt-4">Quality & Reliability</h5>
                    <p className="text-secondary">
                        “Everything works smoothly and the layout is responsive
                        on both mobile and desktop devices.”
                    </p>

                    <h5 className="fw-semibold mt-4">Overall Feedback</h5>
                    <p className="text-secondary">
                        “A great learning-focused platform for beginners and
                        intermediate users. Highly recommended.”
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Testmonial;
