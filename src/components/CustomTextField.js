import React from "react";

const CustomTextField = ({PLACE_HOLDER, TYPE, NAME, VALUE, ON_CHANGE}) => {
    return (
        <input
            placeholder={PLACE_HOLDER}
            type={TYPE}
            name={NAME}
            value={VALUE}
            onChange={ON_CHANGE}
            className={"customTextField"}/>
    )
}

export default CustomTextField;

