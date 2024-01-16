import "./index.css"

import { useNavigate } from "react-router-dom"
import mainLogo from "../../Images/logo-black.png"
import googleLogo from "../../Images/google.png"
import facebookLogo from "../../Images/facebook.png"
import emailLogo from "../../Images/email-icon.png"
import phoneLogo from "../../Images/phone-icon.png"

function Login (){
    const navigate = useNavigate()

    return(
            <div className="main-login-div">
            <div className="login-form-div" id="form">
                <div className="loginPage-login-div">
                    <img src={mainLogo} className='login-main-logo' onClick={()=> navigate('/')}/>
                </div>
                <div className="loginPage-login-div">
                    <span className="greet-span">Welcome to OLX</span>
                </div>
                <div className="loginPage-login-div">
                    <span className="about-olx">The trusted community of buyers and sellers.</span>
                </div>
                <div className="signIn-btn-div">
                    <button className="signIn-btn"><img src={googleLogo} className="signin-btn-img"/>Continue with Google</button>
                    <button className="signIn-btn"><img src={facebookLogo} className="signin-btn-img"/>Continue with Facebook</button>
                    <button className="signIn-btn" onClick={()=> navigate('/register')}><img src={emailLogo} className="signin-btn-img"/>Continue with Email</button>
                    <button className="signIn-btn"><img src={phoneLogo} className="signin-btn-img"/>Continue with Phone</button>
                </div>
                <div className="termsAndCondition-div">
                    <span className="termsAndCondition">By continuing, you are accepting</span>
                    <span className="privacyAndCondition"><button className="olx-condition">OLX Terms of use</button> and <button className="olx-condition">Privacy Policy</button></span>
                </div>
            </div>
        </div>
    )
}

export default Login