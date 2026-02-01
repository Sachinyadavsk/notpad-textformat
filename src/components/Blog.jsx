import React from "react";

function Blog(props) {
    // 🎨 THEME COLORS
    const themeStyle = {
        backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
        color: props.mode === "dark" ? "#ffffff" : "#000000",
    };

    return (
        <div className="container py-5" style={themeStyle}>

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Our Blog</h1>
                <p className="text-muted">
                    Insights, tutorials, and updates written in a simple text format
                </p>
            </div>

            {/* Blog Content */}
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">

                    <h4 className="fw-semibold mt-4">Latest Articles</h4>
                    <p className="text-secondary">
                        Our blog features well-structured articles focused on learning,
                        development, and practical knowledge. Each post is written to be
                        easy to read and understand.
                    </p>

                    <h4 className="fw-semibold mt-4">Learning & Tutorials</h4>
                    <p className="text-secondary">
                        We publish step-by-step guides on web development, programming
                        concepts, and modern technologies to help learners grow confidently.
                    </p>

                    <h4 className="fw-semibold mt-4">Tips & Best Practices</h4>
                    <p className="text-secondary">
                        Discover best practices, productivity tips, and coding standards
                        that improve skills and real-world project performance.
                    </p>

                    <h4 className="fw-semibold mt-4">Updates & Announcements</h4>
                    <p className="text-secondary">
                        Stay informed with platform updates, feature releases, and important
                        announcements related to learning and development.
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Blog;
