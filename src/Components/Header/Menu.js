import { initializeApp } from "firebase/app";
import { onAuthStateChanged,getAuth } from "firebase/auth"
import { getDocs,collection,db } from "../../Views/Login/Auth";

const firebaseConfig = {
    apiKey: "AIzaSyBm9msXFDnZvAJe_Vw1l2xxDkX-9L4OQUI",
    authDomain: "my-olx-bad77.firebaseapp.com",
    projectId: "my-olx-bad77",
    storageBucket: "my-olx-bad77.appspot.com",
    messagingSenderId: "666503542444",
    appId: "1:666503542444:web:7a0b056b6a69a722f39109"
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