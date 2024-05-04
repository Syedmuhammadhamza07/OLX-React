import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, doc, getDoc, collection, addDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCmlRy1z17PgceLWktvGPoLTjWCEoj2qZ4",
  authDomain: "olx-react-firebase-20ca8.firebaseapp.com",
  projectId: "olx-react-firebase-20ca8",
  storageBucket: "olx-react-firebase-20ca8.appspot.com",
  messagingSenderId: "360883715311",
  appId: "1:360883715311:web:027ebe6cadd9c2735c6f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export async function getAllProducts(){
    const querySnapshot = await getDocs(collection(db, "ads"));
    const products = []
    querySnapshot.forEach((doc) => {
      products.push({id:doc.id,...doc.data()})
    });
    return products
}

async function postAdToDb(ad) {
  try {
      console.log(ad);
      const storageRef = ref(storage, `ads/${ad.image[0].name}`);
      const storageRef1 = ref(storage, `ads/${ad.image1[0].name}`);
      alert(storageRef)

      await uploadBytes(storageRef,storageRef1, ad.image)

      const url = await getDownloadURL(storageRef,storageRef1)

      ad.image = url
      console.log(url);
      await addDoc(collection(db, "ads"), ad)
      alert('Data added successfully!')
      navigate('/')
  } catch (e) {
      alert(e.message)
  }
}

export async function getSingleAd(id){
    console.log(id)
  const docRef = doc(db, "ads", id );
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {...docSnap.data() , id :id};
  } else {
    console.log("No such document!");
  }
}

export {
  postAdToDb,
  auth,
  onAuthStateChanged,
  db,
  doc,
  getDoc,
  getDocs,
  collection,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  addDoc,
  storage
}