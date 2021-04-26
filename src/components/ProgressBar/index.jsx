import React, { useEffect } from "react";
import "./ProgressBar.scss";
import PropTypes from "prop-types";
import UseStorage from "../../hooks/useStorage";
import { motion } from "framer-motion";

ProgressBar.propTypes = {};

function ProgressBar({ file, setFile }) {
  const { url, progress } = UseStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
