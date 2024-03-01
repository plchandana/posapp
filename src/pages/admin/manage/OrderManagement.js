import React from "react";
import CustomTextField from "../../../components/CustomTextField";
import CustomButton from "../../../components/CustomButton";

const OrderManagement = () => {
    return (
        <div>
        <h1> Order Management </h1>
        <CustomTextField PLACE_HOLDER={"Order_ID"}></CustomTextField><br></br><br></br>

        <CustomTextField PLACE_HOLDER={"Name"}></CustomTextField><br></br><br></br>

        <CustomTextField PLACE_HOLDER={"Discription"}></CustomTextField><br></br><br></br>
        <CustomTextField PLACE_HOLDER={"Item_Id"}></CustomTextField><br></br><br></br>
        <CustomButton BTN_NAME={"Add"}></CustomButton>
        </div>
    )
}

export default OrderManagement;
