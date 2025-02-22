import React from 'react';
import "../styles/components/Button.css";

const Button = ({value}) => {
    return (
        <div className='global-btn'>
            <button>{value}</button>
        </div>
    );
};
export default Button;