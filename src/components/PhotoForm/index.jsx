import React, { useState } from "react";
import ProgressBar from "./../ProgressBar";
import PropTypes from "prop-types";
import "./PhotoForm.scss"

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const onChange = (e) => {
    var selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setError("Please choose correct image type (png, jpg)");
    }
  };
  return (
    <div className="photo-form">
      <label>
        <input type="file" onChange={onChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="file">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
}

export default PhotoForm;
