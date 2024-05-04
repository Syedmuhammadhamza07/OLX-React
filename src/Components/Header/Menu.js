import { initializeApp } from "firebase/app";
import { onAuthStateChanged,getAuth } from "firebase/auth"
import { getDocs,collection,db } from "../../Views/Login/Auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmlRy1z17PgceLWktvGPoLTjWCEoj2qZ4",
  authDomain: "olx-react-firebase-20ca8.firebaseapp.com",
  projectId: "olx-react-firebase-20ca8",
  storageBucket: "olx-react-firebase-20ca8.appspot.com",
  messagingSenderId: "360883715311",
  appId: "1:360883715311:web:027ebe6cadd9c2735c6f1a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user is logged in')
        console.log(user)
        
        const loginDiv = document.getElementById('login-div')
        const userLogin = document.getElementById('signIn-link')
        userLogin.style.display = 'none'
  
        const imgDiv = document.createElement('div')
        imgDiv.style.display = 'flex'
        imgDiv.style.alignItems = 'center'
        const userImg = document.createElement('img')
        userImg.src = '../../Images/userprofile.png'
        userImg.style.width = '40px'
        const dropArrow = document.createElement('img')
        dropArrow.src = '../../Images/down-arrow.png'
        dropArrow.style.width = '20px'
  
        imgDiv.appendChild(userImg)
        imgDiv.appendChild(dropArrow)
        imgDiv.className = 'profile-dropDown'
        userImg.onclick = toggleMenu
  
        loginDiv.appendChild(imgDiv)
  
        getUser(uid)
        // ...
      } else {
        // User is signed out
        // loader.style.display = 'none'
        // auhDiv.style.display = 'block'
        // userDiv.style.display = 'none'
        
        // ...
      }
  });

  async function getUser(uid) {
    console.log('uid', uid)
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    if (doc.id === uid) {
        const firstName = doc.data().firstname
        const lastName = doc.data().lastname
        const fullname = `${firstName} ${lastName}`
        console.log(fullname);
        const username = document.getElementById('username-info')
        username.innerHTML = fullname
    }
    });
  }

let subMenu = document.getElementById('subMenu')
const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
};