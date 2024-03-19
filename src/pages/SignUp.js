import { userSaveAPI } from "../api/user/userAPI";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";
import { useState } from "react";
import "../assets/theme/App.css"
import { Link, useNavigate } from "react-router-dom";



function SignUp() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    const signUpFunction = async () => {

        console.log(formData);
             try {
                    const res = await fetch(`${userSaveAPI}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                        body: JSON.stringify(formData)
                    })
        console.log(
            'res', res
         );
                    // if (res.status === 200) {
                    //     alert("User Register Success!")
                    //     navigate('/sign-in', {replace: true})
                    // } else {
                    //     alert("User Register Fail!")
                    // }
                } catch (e) {
                }
    }

    return (
        <div className="containor">
            <div className="content">
                <h1>SIGN UP</h1>

                <CustomTextField
                    PLACE_HOLDER={"Username"}
                    TYPE={"text"}
                    NAME={"username"}
                    VALUE={formData.username}
                    ON_CHANGE={handleChange}
                />
                <br></br>
                <CustomTextField
                    PLACE_HOLDER={"Email"}
                    TYPE={"email"}
                    NAME={"email"}
                    VALUE={formData.email}
                    ON_CHANGE={handleChange}
                />
                <br></br>
                <CustomTextField
                    PLACE_HOLDER={"Mobile Number"}
                    TYPE={"number"}
                    NAME={"mobile"}
                    VALUE={formData.mobile}
                    ON_CHANGE={handleChange}
                />
                <br></br>

                <CustomTextField
                    PLACE_HOLDER={"Password"}
                    TYPE={"password"}
                    NAME={"password"}
                    VALUE={formData.password}
                    ON_CHANGE={handleChange}
                />

                <div className={"showPasswordSection"}>
                    <input type="checkbox"></input>
                    <label>Show password</label>
                </div>

                <CustomButton BTN_NAME={"SIGN UP"} ON_CLICK={signUpFunction} />

                <p>
                    Already Have an account ? <Link sty to="/sign-in">Sign In</Link>
                </p></div>
        </div>
    );
}

export default SignUp;

