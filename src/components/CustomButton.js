import React from "react";
import '../assets/theme/buttonStyles.css';

const CustomButton = ({BTN_NAME}) => {
    return (
        <input type='button' value={BTN_NAME} className='customButton'/>
    )
}

export default CustomButton;
