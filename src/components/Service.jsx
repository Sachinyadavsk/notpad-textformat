import React from "react";

function Service(props) {

    const themeStyle = {
        backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#000000",
    };

    return (
        <div className="container py-5" style={themeStyle}>

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Our Services</h1>
                <p className="text-muted">
                    Simple, reliable, and user-focused services
                </p>
            </div>

            {/* Services Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">

                    <h4 className="fw-semibold mt-4">Web Development</h4>
                    <p className="text-secondary">
                        We build responsive, user-friendly websites using modern
                        technologies with clean structure and optimized performance.
                    </p>

                    <h4 className="fw-semibold mt-4">Frontend Development</h4>
                    <p className="text-secondary">
                        Creating interactive and visually consistent user interfaces
                        using HTML, CSS, Bootstrap, and React.
                    </p>

                    <h4 className="fw-semibold mt-4">Backend Development</h4>
                    <p className="text-secondary">
                        Developing secure and scalable server-side logic, APIs,
                        and database integrations.
                    </p>

                    <h4 className="fw-semibold mt-4">Support & Maintenance</h4>
                    <p className="text-secondary">
                        Providing continuous support, updates, and improvements
                        to ensure smooth and reliable application performance.
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Service;
