import React from "react";

function Home(props) {

  // 🎨 THEME COLORS
  const themeStyle = {
    backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
  };
  
  return (
    <div className="container py-5" style={themeStyle}>
      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Welcome to Home Page</h1>
        <p className="text-muted">
          Explore topics, learn skills, and grow step by step
        </p>
      </div>

      {/* Topics Content */}
      <div className="row justify-content-center">
        <div className="col-md-8">

          <h4 className="fw-semibold mt-4">Web Development</h4>
          <p className="text-secondary">
            Learn how websites work using HTML, CSS, Bootstrap, JavaScript, React,
            and backend technologies to build modern web applications.
          </p>

          <h4 className="fw-semibold mt-4">Programming Fundamentals</h4>
          <p className="text-secondary">
            Understand programming logic, data structures, and problem-solving
            using languages like C, C++, Java, Python, and PHP.
          </p>

          <h4 className="fw-semibold mt-4">Projects & Practice</h4>
          <p className="text-secondary">
            Practice real-world projects, improve coding skills, and gain
            hands-on experience through continuous learning.
          </p>

          <h4 className="fw-semibold mt-4">Career & Growth</h4>
          <p className="text-secondary">
            Enhance your technical knowledge, build confidence, and prepare
            yourself for internships, jobs, and freelance opportunities.
          </p>

        </div>
      </div>

    </div>
  );
}

export default Home;
