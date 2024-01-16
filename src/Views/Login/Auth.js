import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import {getFirestore, getDocs, doc,collection, setDoc, deleteDoc,} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// import {getAds, searchInAds} from "./src/config/config.js";
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
const db = getFirestore(app);


// const sellItems = document.getElementById('sell')
// sellItems?.addEventListener('click' , (event) =>{
//   event.preventDefault()
  
// })
 
export async function register(userInfo) {
      const {fullname , email , password} = userInfo
      const {user:{uid}} = await createUserWithEmailAndPassword(auth, email, password)
      const usrRef = doc(db, 'users' , uid);
      await setDoc(usrRef, {
            fullname,
            email,
            password
      });
      alert("register Successfully!")
}

// const logout = document.querySelector("#logout-btn");

// logout?.addEventListener('click' , ()=>{
//     signOut(auth).then(() => {
//         alert("Logout Successfully")
//         window.location = './signin.html'
//       }).catch((error) => {
//         console.log(error);
//       });
// })

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



// Index.html ki js ka kaam hai 
onAuthStateChanged(auth, (user) => {
  if (user) {
      renderAds()
  } else {
      // location.href = './signin.html'
  }
})


export {
  auth,
  onAuthStateChanged,
  getUser,
  getDocs,
  doc,
  collection,
  createUserWithEmailAndPassword,
  setDoc,
  db
}