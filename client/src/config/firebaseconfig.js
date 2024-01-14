import { initializeApp,getApp,getApps } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCHDfaYZgvcfaKc846RhR80SZPQAxkBKwk",
  authDomain: "musicplayer-a74d8.firebaseapp.com",
  projectId: "musicplayer-a74d8",
  storageBucket: "musicplayer-a74d8.appspot.com",
  messagingSenderId: "946146310959",
  appId: "1:946146310959:web:8f36d8991286c7012f7fda"
};

// Initialize Firebase
const app = getApps.length>0 ? getApp():initializeApp(firebaseConfig);
const storage = getStorage(app);
export{app,storage};