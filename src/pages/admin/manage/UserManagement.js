import React from "react";
import "../../../assets/theme/userManageStyles.css";
import CustomTextField from "../../../components/CustomTextField";
import CustomButton from "../../../components/CustomButton";

const UserManagement = () => {
    return (
        <div className={"container"}>

            <h1> User Management </h1>

            <CustomTextField PLACE_HOLDER={"Username"}/> <br/>
            <CustomTextField PLACE_HOLDER={"Email"}/><br/>

            <div className={"buttonSection"}>
                <CustomButton BTN_NAME={"SAVE"}/>
                <CustomButton BTN_NAME={"DELETE"}/>
                <CustomButton BTN_NAME={"UPDATE"}/>
                <CustomButton BTN_NAME={"SEARCH"}/>
            </div>


        </div>
    )
}

export default UserManagement
