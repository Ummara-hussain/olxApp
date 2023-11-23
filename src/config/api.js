import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'


const firebaseConfig = {
    apiKey: "AIzaSyBXUIQn0MsGgyPGAOzS604eWgUNj6OHDsU",
    authDomain: "olxapp-34215.firebaseapp.com",
    projectId: "olxapp-34215",
    storageBucket: "olxapp-34215.appspot.com",
    messagingSenderId: "265200995364",
    appId: "1:265200995364:web:c0852f64406986da321cb1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function details(id) {
    // const docRef = doc(db, "ads", id);
    // try {
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         // console.log("Document data:", docSnap.data());
    //         const ads = docSnap.data()
    //     } else {
    //         // docSnap.data() will be undefined in this case
    //         console.log("No such document!");
    //     } return docSnap.data()
    // } catch (e) {
    //     Swal.fire(e.message)
    // }
}
function register(email, password, firstName) {
    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            fullname: firstName
        })
    }).then(res => res.json())
        .then(res => Swal.fire(res.message))

    // try {
    //     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    //     const docRef = await addDoc(collection(db, "users"), {
    //         fullname: fullname,
    //         email: email,
    //         age: age
    //     });
    //     Swal.fire('successfully registered')
    // } catch (e) {
    //     Swal.fire(e.message)
    // }
}

function login(email, password) {
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,

        })
    }).then(res => res.json())
        .then(res => alert(res.message))

    // return signInWithEmailAndPassword(auth, email, password)
}

function logout() {
    // return signOut(auth)
}

async function postAd({ title, description, price, file }) {

    const url = await uploadImage(file)

    fetch('http://localhost:3000/ads/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            price,
            imageUrl: url
        })
    }).then(res => res.json())
        .then(res => console.log(res))
        .catch(e => Swal.fire('e --->', e))
    // try {
    //     const url = await uploadImage(file)
    //     const data = { title, description, price: +price, imageUrl: url }
    //     await addDoc(collection(db, "ads"), data);
    //     Swal.fire('Ad posted sucessfully!')
    // } catch (e) {
    //     Swal.fire(e.message)
    // }
}

async function uploadImage(file) {
    try {
        const storageRef = ref(storage, 'ads/' + file.name);
        await uploadBytes(storageRef, file)
        const url = await getDownloadURL(storageRef)
        return url
    } catch (e) {
        Swal.fire(e.message)
    }
}

async function getAds() {
    
    // const querySnapshot = await getDocs(collection(db, "ads"));
    // const ads = []
    // querySnapshot.forEach((doc) => {
    //     const data = doc.data()
    //     data.id = doc.id
    //     ads.push(data);
    // });
    // return ads
}
export { register, login, getAds, postAd, details, logout }