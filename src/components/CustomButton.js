import React from "react";
import '../assets/theme/buttonStyles.css';

const CustomButton = ({BTN_NAME, ON_CLICK}) => {
    return (
        <input type='button' value={BTN_NAME} className='customButton' onClick={ON_CLICK}/>
    )
}

export default CustomButton;
