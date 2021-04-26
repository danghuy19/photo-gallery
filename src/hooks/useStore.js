import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { projectStore } from "../firebase/configure";

UseStore.propTypes = {};

function UseStore(collection) {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub;
  }, [collection]);

  return { docs };
}

export default UseStore;
