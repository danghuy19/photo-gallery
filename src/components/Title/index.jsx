import React from 'react';
import PropTypes from 'prop-types';
import "./Title.scss"

Title.propTypes = {
    
};

function Title(props) {
    return (
        <div className="title">
            <h1>Firegram</h1>
            <h3>Your Pictures</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default Title;