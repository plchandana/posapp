import '../assets/theme/App.css';
import CustomButton from "../components/CustomButton";
import CustomTextField from '../components/CustomTextField';

function SignUp() {
    return (
        <div className="containor">
            <div className="content">
                <div><lebel className="title">SignUp</lebel></div><br/><br/>
                
                <CustomTextField PLACE_HOLDER={"User Name"}></CustomTextField><br/>
                <CustomTextField PLACE_HOLDER={"Email"}></CustomTextField><br/>
                <CustomTextField  PLACE_HOLDER={"Mobile Number"}></CustomTextField><br/>
                <CustomTextField PLACE_HOLDER={"Password"}></CustomTextField><br/>
                <CustomTextField PLACE_HOLDER={"Confirm Password"}></CustomTextField><br/>
                <input type="checkbox"></input>
                
                <label>show password</label>
                <div className='buttonArea'>
                <CustomButton BTN_NAME={"SIGN UP"}/>
                </div>

                <div className="a">Forgot</div>
                <div className="b">User Name/Password?</div>
                <div>
                    <div className="c">Don't have an Account?</div>
                    <div className="d">Sign up</div>
                </div>
            </div>


        </div>
    );
}

export default SignUp;
