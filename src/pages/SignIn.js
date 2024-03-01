import '../assets/theme/App.css';
import CustomButton from "../components/CustomButton";

function SignIn() {
    return (
        <div className="containor">
            <div className="content">
                <lebel className="title">User Login</lebel>

                <input class="email" placeholder='Email'></input>
                <input class="password" placeholder='password '></input>

                <input
                    type="checkbox"
                    id="showPasswordCheckbox"></input>
                <label className='showpassword'>Show password</label>

                <CustomButton BTN_NAME={"SIGN IN"}/>

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

export default SignIn;
