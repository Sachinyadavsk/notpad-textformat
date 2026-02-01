import React from "react";

function Contact(props) {

    // 🎨 THEME COLORS
  const themeStyle = {
    backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
  };
    
    return (
        <div className="container py-5" style={themeStyle}>

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Contact Us</h1>
                <p className="text-muted">
                    We’d love to hear from you. Get in touch anytime.
                </p>
            </div>

            {/* Contact Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">

                    <h4 className="fw-semibold mt-4">Get in Touch</h4>
                    <p className="text-secondary">
                        If you have questions, feedback, or need support, feel free
                        to contact us. We aim to respond as quickly as possible.
                    </p>

                    <h4 className="fw-semibold mt-4">Support & Assistance</h4>
                    <p className="text-secondary">
                        Our support team is available to help you with technical
                        issues, service inquiries, and general guidance.
                    </p>

                    <h4 className="fw-semibold mt-4">Business Inquiries</h4>
                    <p className="text-secondary">
                        For partnerships, collaborations, or business-related
                        discussions, reach out to us through our official channels.
                    </p>

                    <h4 className="fw-semibold mt-4">Response Time</h4>
                    <p className="text-secondary">
                        We usually respond within 24–48 hours on business days.
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Contact;
