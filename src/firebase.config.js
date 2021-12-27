// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFireStore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqk8jW5r-HsyFFbpuJ8seisBGUi2-Z0dw",
  authDomain: "devlab1-c2641.firebaseapp.com",
  projectId: "devlab1-c2641",
  storageBucket: "devlab1-c2641.appspot.com",
  messagingSenderId: "364390097587",
  appId: "1:364390097587:web:cbb7d1a0abc535cf5846c6"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()