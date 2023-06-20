import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAcU7kOHJ2umrhqVzpeNYmCLC_MgYX8-S8",
  authDomain: "tiktok---jornada-cc1db.firebaseapp.com",
  projectId: "tiktok---jornada-cc1db",
  storageBucket: "tiktok---jornada-cc1db.appspot.com",
  messagingSenderId: "813286334090",
  appId: "1:813286334090:web:567c2caa2f1d97c9841773"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;