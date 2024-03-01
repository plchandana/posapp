import React from "react";
import CustomTextField from "../../../components/CustomTextField";
import CustomButton from "../../../components/CustomButton";
import "../../../assets/theme/itemManage.css";
const ItemManagement = () => {
    return(
        <div className="container">
        <h1> Item Management </h1>
        
        
        <CustomTextField PLACE_HOLDER={"Item Id"}/><br></br>
        <CustomTextField PLACE_HOLDER={"Description"}/><br></br>
        <CustomTextField PLACE_HOLDER={"Quantity"}/><br></br>
        <CustomTextField PLACE_HOLDER={"Price"}/><br></br>
        <CustomButton BTN_NAME={"Submit"}></CustomButton>
        </div>
    
    );
}

export default ItemManagement;
