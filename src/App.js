import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from "./components/Title";
import PhotoForm from "./components/PhotoForm";
import "./App.scss"
import Photo from './components/Photo';
import Modal from "./components/Modal";

App.propTypes = {
  
};

function App(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
  return (
    <div className="photo-container">
      <Title />
      <PhotoForm />
      <Photo setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;