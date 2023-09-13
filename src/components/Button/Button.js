// Button.js
import React from 'react';
import '../styles.css'

const Button = ({ onClick, disabled }) => {
    return (
        <button type="button" className="Button" onClick={onClick} disabled={disabled}>
            <span className="button-label">Load more</span>
        </button>
    );
};

export default Button;
