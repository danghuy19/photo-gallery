import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import { motion } from "framer-motion";

Modal.propTypes = {};

function Modal({ selectedImage, setSelectedImage }) {
  const closeModal = (e) => {
    if (e.target.classList.contains("back-drop")) {
      setSelectedImage(null);
    }
  };
  return (
    <motion.div
      className="back-drop"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt=""
        initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;
