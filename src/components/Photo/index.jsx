import React from "react";
import PropTypes from "prop-types";
import UseStore from "../../hooks/useStore";
import "./Photo.scss";
import { motion } from "framer-motion";

Photo.propTypes = {};

function Photo({ setSelectedImage }) {
  const { docs } = UseStore("images");
  return (
    <div className="pic-container">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="pic"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              onClick={() => setSelectedImage(doc.url)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default Photo;
