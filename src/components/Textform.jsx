import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleSpaceClick = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // 🎨 THEME COLORS
  const themeStyle = {
    backgroundColor: props.mode === "dark" ? "#1e1e2f" : "#f8f9fa",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
  };

  const textAreaStyle = {
    backgroundColor: props.mode === "dark" ? "#2a2a40" : "#ffffff",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "#444" : "#ccc",
  };

  const wordCount =
    text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

  return (
    <div style={themeStyle}>
      <div className="container">
        <h2 className="mb-3">{props.heading}</h2>

        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          style={textAreaStyle}
          id="myBox"
          rows="8"
          placeholder="Enter your text here..."
        />

        <div className="mb-4">
          <button
            className="btn btn-primary mx-1"
            disabled={!text}
            onClick={handleUpClick}
          >
            Uppercase
          </button>

          <button
            className="btn btn-primary mx-1"
            disabled={!text}
            onClick={handleLoClick}
          >
            Lowercase
          </button>

          <button
            className="btn btn-secondary mx-1"
            disabled={!text}
            onClick={handleSpaceClick}
          >
            Remove Extra Spaces
          </button>

          <button
            className="btn btn-success mx-1"
            disabled={!text}
            onClick={handleCopyClick}
          >
            Copy
          </button>

          <button
            className="btn btn-danger mx-1"
            disabled={!text}
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>

        <hr />

        <h4>Text Summary</h4>
        <p>
          <strong>{wordCount}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{(0.008 * wordCount).toFixed(2)}</strong> minutes read
        </p>

        <h5>Preview</h5>
        <p className="border p-2 rounded">
          {text.length > 0
            ? text
            : "Enter something to preview it here..."}
        </p>
      </div>
    </div>
  );
}

export default Textform;
