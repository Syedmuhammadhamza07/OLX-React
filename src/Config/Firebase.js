import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, doc, getDoc, collection, addDoc, deleteDoc, where, query} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBm9msXFDnZvAJe_Vw1l2xxDkX-9L4OQUI",
    authDomain: "my-olx-bad77.firebaseapp.com",
    projectId: "my-olx-bad77",
    storageBucket: "my-olx-bad77.appspot.com",
    messagingSenderId: "666503542444",
    appId: "1:666503542444:web:7a0b056b6a69a722f39109"
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