import "./index.css"
import { useNavigate } from "react-router-dom"
import { setDoc , doc , db} from "../Login/Auth"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import mainLogo from "../../Images/logo-black.png"

function Register (){
    const auth = getAuth();
    const navigate = useNavigate()

    const signUpform = document.querySelector("#form");
    signUpform?.addEventListener('submit', async (e) => {
      e.preventDefault()
      console.log(e)
      const fullname = e.target[0].value
      const email = e.target[1].value
      const password = e.target[2].value
    
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log('userCredential --', userCredential)
        await setDoc(doc(db, "users", userCredential.user.uid), {
            fullname,
            email,
            password
        });
        window.location = '../Dashboard'
        // navigate('/')
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        //   console.log('userCredential --', userCredential)
        //   await setDoc(doc(db, "users", userCredential.user.uid), {
        //         fullname,
        //         email,
        //         password
        //   });
          
    
      } catch (e) {
          alert(e.message)
      }
    })

    return(
        <form id="form">
            <div className="main-register-div">
            <div className="registration-form-div">
                <div className="register-div">
                    <img src={mainLogo} className="register-main-logo" onClick={()=> navigate('/')}/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Fullname</span>
                </div>
                <div className="register-div">
                    <input type="text" placeholder="Fulname" className="register-email-input" id="register-fullname-input"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Email</span>
                </div>
                <div className="register-div">
                    {/* <input type="text" placeholder="Email" className="register-email-input" id="register-email-input"/> */}
                    <input type="text" placeholder="Email" className="register-email-input" id="register-email-input" autoComplete="username"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Enter your Password</span>
                </div>
                <div className="register-div">
                    <input type="password" placeholder="New password" className="register-email-input" id="register-password-input" autoComplete="new-password"/>
                </div>
                <div className="register-div">
                    <span className="greet-span">Confirm Password</span>
                </div>
                <div className="register-div">
                    <input type="password" placeholder="Confirm new password" className="register-email-input" id="register-confirmPassword-input" autoComplete="new-password"/>
                </div>
                <div className="register-div">
                    <button className="next-btn">Register</button>
                </div>
                <div className="privacy-div">
                    <span className="termsAndCondition">We won't reveal your email to anyone else nor use it to send you spam.</span>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Register